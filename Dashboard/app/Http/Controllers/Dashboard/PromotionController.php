<?php

namespace App\Http\Controllers\Dashboard;
use Validator;
use App\Http\Controllers\Controller;
use App\Promotion;
use App\Meta;
use App\Thumbnail;
use App\Store;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use App\Http\Controllers\DashboardController;
class PromotionController extends DashboardController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $promotions = Promotion::orderBy('id','asc')->paginate(10);
        return view('dashboard.promo.index',compact(['promotions']));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $stores = Store::all();
        return view('dashboard.promo.create',['stores'=>$stores]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $req)
    {
        $validator_promotion = Validator::make($req->all(),[
                'title' => 'required|unique:promotions,title',
                'original' => 'required',
                'started_at'=>'required',
                'store_id'=>'required',
                'ended_at'=>'required',
                'link'=>'required',
                'body_html'=>'required',
                'path_url'=>'required|unique:metas,path_url',
            ],[
                'title.required' => 'Promotion name is required',
                'title.unique' => 'This promotion name has already been taken',
                'original.required'=> 'Store logo is required',
                'started_at.required'=> 'Start period is required',
                'store_id.required'=>'Please select the store',
                'body_html.required'=>'Body is required',
                'link.required'=>'Link is required',
                'ended_at.required'=> 'End period is required',
                'path_url.required'=>'Slug is required',
                'path_url.unique'=> 'This slug has already been taken'
            ]
        );
        if($validator_promotion->passes()){
            $promotion = new Promotion;
            $promotion->title = $req->title;
            $promotion->store_id = $req->store_id;
            $promotion->started_at = $req->started_at;
            $promotion->ended_at = $req->ended_at;
            $promotion->link = $req->link;
            $thumbnail = new Thumbnail;
            $thumbnail->imageable_id = $promotion->id;
            $thumbnail->original = $req->original;
            $thumbnail->alt = $req->alt;
            $meta = new Meta;
            $meta->metaable_id = $promotion->id;
            $meta->meta_title = $req->meta_title;
            $meta->meta_description = $req->meta_description;
            $meta->meta_keyword = $req->meta_keyword;
            $meta->canonical = $req->canonical;
            $meta->noindex = $req->noindex;
            $meta->body_html = $req->body_html;
            $meta->json_ld = $req->json_ld;
            $meta->path_url = $req->path_url;
            $promotion->save();
            $promotion->meta()->save($meta);
            $promotion->thumbnail()->save($thumbnail);
            //Cache::put('stores',$promotion,Carbon::now());
            return $this->successResponse('Your promotion has been saved!', 200);
        }else{
            return $this->errorResponse($validator_promotion->errors()->all(), 406);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Promotion  $promotion
     * @return \Illuminate\Http\Response
     */
    public function show(Promotion $promotion)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Promotion  $promotion
     * @return \Illuminate\Http\Response
     */
    public function edit(Promotion $promotion)
    {
        $stores = Store::all();
        return view('dashboard.promo.update',['promotion'=>$promotion, 'stores'=>$stores]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Promotion  $promotion
     * @return \Illuminate\Http\Response
     */
    public function update(Request $req, Promotion $promotion)
    {
        $validator_promotion = Validator::make($req->all(),[
                'title' => 'required|unique:promotions,title,'.$promotion->id,
                'original' => 'required',
                'started_at'=>'required',
                'store_id'=>'required',
                'link'=>'required',
                'ended_at'=>'required',
                'body_html'=>'required',
                'path_url'=>'required|unique:metas,path_url,'. $promotion->meta->id
            ],[
                'title.required' => 'Promotion name is required',
                'title.unique' => 'This promotion name has already been taken',
                'original.required'=> 'Store logo is required',
                'started_at.required'=> 'Start period is required',
                'store_id.required'=>'Please select the store',
                'link.required'=>'Link is required',
                'body_html.required'=>'Body is empty',
                'ended_at.required'=> 'End period is required',
                'path_url.required'=>'Slug is required',
                'path_url.unique'=> 'This slug has already been taken'
            ]
        );

        if($validator_promotion->passes()){
            $promotion->update([
                'title' => $req->title,
                'started_at' => $req->started_at,
                'ended_at' => $req->ended_at,
                'link'=>$req->link,
            ]);
            $promotion->thumbnail()->update([
                'original' => $req->original,
                'alt'=> $req->alt,
            ]);
            $promotion->meta()->update([
                'meta_title' => $req->meta_title,
                'meta_description'=> $req->meta_description,
                'meta_keyword' => $req->meta_keyword,
                'canonical' => $req->canonical,
                'noindex' => $req->noindex,
                'json_ld' => $req->json_ld,
                'path_url' => $req->path_url,
                'body_html'=>$req->body_html,
            ]);
            return $this->successResponse($promotion->title. ' has been updated!', 200);
        }else{
            return $this->errorResponse($validator_promotion->errors()->all(), 406);
        }

    }

    public function destroy(Promotion $promotion)
    {
        $promotion->delete();
        $promotion->deleteMorphResidual();
        return $this->successResponse($promotion->title.' has been deleted', 200);
    }
}
