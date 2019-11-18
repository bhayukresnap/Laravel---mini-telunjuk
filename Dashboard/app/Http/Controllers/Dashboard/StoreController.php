<?php

namespace App\Http\Controllers\Dashboard;
use Validator;
use App\Store;
use App\Meta;
use App\Image;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
class StoreController extends ApiController
{
    public function view(){
        return $this->showAll(Store::orderBy('store_name','asc')->with('thumbnail')->get());
    }
    public function index()
    {
        return view('dashboard.store.index',compact(['stores'=>Store::orderBy('store_name','asc')->with('thumbnail')->get()]));
    }

    public function create()
    {
        
    }

    public function store(Request $req)
    {
        $validator_store = Validator::make($req->all(),[
            'store_name' => 'required|unique:stores,store_name',
            'store_logo' => 'required',
            'path_url'=>'required|unique:metas,path_url',

        ]);
        if($validator_store->passes()){
            $store = new Store;
            $store->store_name = $req->store_name;
            $thumbnail = new Image;
            $thumbnail->imageable_id = $store->id;
            $thumbnail->featuredImage = $req->store_logo;
            $thumbnail->alt = $req->alt;
            $meta = new Meta;
            $meta->metaable_id = $store->id;
            $meta->meta_title = $req->meta_title;
            $meta->meta_description = $req->meta_description;
            $meta->meta_keyword = $req->meta_keyword;
            $meta->canonical = $req->canonical;
            $meta->noindex = $req->noindex;
            $meta->json_ld = $req->json_ld;
            $meta->path_url = $req->path_url;
            $store->save();
            $store->meta()->save($meta);
            $store->thumbnail()->save($thumbnail);
            return $this->successResponse('Your store has been saved!', 200);
        }else{
            return $this->errorResponse($validator_store->errors()->all(), 406);
        }
    }

    public function show(Store $store)
    {
        return $store->with(['meta','thumbnail'])->whereId($store->id)->get();
    }

    public function edit(Store $store)
    {
        //
    }

    public function update(Request $req, Store $store)
    {
        $validator_store = Validator::make($req->all(),[
            'store_name' => 'required|unique:stores,store_name,'. $store->id,
            'path_url'=>'required|unique:metas,path_url,'. $store->meta->id
        ]);
        if($validator_store->passes()){
            $store->update([
                'store_name' => $req->store_name,
            ]);
            $store->thumbnail()->update([
                'featuredImage' => $req->featuredImage,
                'alt'=> $req->alt,
            ]);
            $store->meta()->update([
                'meta_title' => $req->meta_title,
                'meta_description'=> $req->meta_description,
                'meta_keyword' => $req->meta_keyword,
                'canonical' => $req->canonical,
                'noindex' => $req->noindex,
                'json_ld' => $req->json_ld,
                'path_url' => $req->path_url,
            ]);

            return $this->successResponse($store->store_name. ' has been updated!', 200);
        }else{
            return $this->errorResponse($validator_store->errors()->all(), 406);
        }
    }

    public function destroy(Store $store)
    {
        $store->delete();
        $store->deleteMorphResidual();
        return $this->successResponse($store->store_name.' has been deleted', 200);
    }
}
