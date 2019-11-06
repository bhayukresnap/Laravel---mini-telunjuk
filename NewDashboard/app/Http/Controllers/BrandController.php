<?php

namespace App\Http\Controllers;
use Validator;
use App\Brand;
use App\Meta;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
class BrandController extends ApiController
{
    public function view(){
        return view('dashboard.brand.index');
    }
    public function index()
    {
        return $this->showAll(Brand::orderBy('brandName','asc')->get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $req
     * @return \Illuminate\Http\Response
     */
    public function store(Request $req)
    {
         $validator_brand = Validator::make($req->all(),[
            'brandName' => 'required|unique:brands,brandName',
            'path_url'=>'required|unique:metas,path_url'
        ]);
        if($validator_brand->passes()){
            $brand = new Brand;
            $brand->brandName = $req->brandName;
            $meta = new Meta;
            $brand->save();
            $meta->metaable_id = $brand->id;
            $meta->meta_title = $req->meta_title;
            $meta->meta_description = $req->meta_description;
            $meta->canonical = $req->canonical;
            $meta->noindex = $req->noindex;
            $meta->json_ld = $req->json_ld;
            $meta->path_url = $req->path_url;
            $brand->meta()->save($meta);
            return $this->successResponse('Your category has been saved!', 200);
        }else{
            return $this->errorResponse($validator_brand->errors()->all(), 406);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Brand  $brand
     * @return \Illuminate\Http\Response
     */
    public function show(Brand $brand)
    {
        return $brand->with('meta')->whereId($brand->id)->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Brand  $brand
     * @return \Illuminate\Http\Response
     */
    public function edit(Brand $brand)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $req
     * @param  \App\Brand  $brand
     * @return \Illuminate\Http\Response
     */
    public function update(Request $req, Brand $brand)
    {
        $validator_brand = Validator::make($req->all(),[
            'brandName' => 'required|unique:brands,brandName,'. $brand->id,
            'path_url'=>'required|unique:metas,path_url,'. $brand->meta->id
        ]);
        if($validator_brand->passes()){
            $brand->update([
                'brandName' => $req->brandName,
            ]);

            $brand->meta()->update([
                'meta_title' => $req->meta_title,
                'meta_description'=> $req->meta_description,
                'canonical' => $req->canonical,
                'noindex' => $req->noindex,
                'json_ld' => $req->json_ld,
                'path_url' => $req->path_url,
            ]);

            return $this->successResponse($brand->brandName. ' has been updated!', 200);
        }else{
            return $this->errorResponse($validator_brand->errors()->all(), 406);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Brand  $brand
     * @return \Illuminate\Http\Response
     */
    public function destroy(Brand $brand)
    {
        $brand->meta()->delete();
        $brand->delete();
        return $this->successResponse($brand->brandName.' has been deleted', 200);
    }
}
