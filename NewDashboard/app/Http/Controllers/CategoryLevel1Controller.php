<?php

namespace App\Http\Controllers;

use Validator;
use App\CategoryLevel1;
use App\Meta;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
class CategoryLevel1Controller extends ApiController
{
  	
	public function view(){
		return view('dashboard.categories.index');
	}

    public function index()
    {
        $cat = CategoryLevel1::with('manylevel2.manylevel3')->get();
        return $this->showAll($cat);
    }

   
    public function create()
    {
    }

    
    public function store(Request $req)
    {
        $validator_cat = Validator::make($req->all(),[
            'category_name' => 'required|unique:categories_level_1,category_name',
            'path_url'=>'required|unique:metas,path_url'
        ]);
        if($validator_cat->passes()){
            $cat = new CategoryLevel1;
            $cat->category_name = $req->category_name;
            $meta = new Meta;
            $cat->save();
            $meta->metaable_id = $cat->id;
            $meta->meta_title = $req->meta_title;
            $meta->meta_description = $req->meta_description;
            $meta->canonical = $req->canonical;
            $meta->noindex = $req->noindex;
            $meta->json_ld = $req->json_ld;
            $meta->path_url = $req->path_url;
            $cat->meta()->save($meta);
            return $this->successResponse('Your category has been saved!', 200);
        }else{
            return $this->errorResponse($validator_cat->errors()->all(), 406);
        }
    }

    
    public function show(CategoryLevel1 $categorieslevel1)
    {
        return $categorieslevel1->with('meta')->whereId($categorieslevel1->id)->get();
    }

    
    public function edit(CategoryLevel1 $categorieslevel1)
    {
        //
    }

    
    public function update(Request $req, CategoryLevel1 $categorieslevel1)
    {
        $validator_cat = Validator::make($req->all(),[
            'category_name' => 'required|unique:categories_level_1,category_name,'. $categorieslevel1->id,
            'path_url'=>'required|unique:metas,path_url,'. $categorieslevel1->meta->id
        ]);
        if($validator_cat->passes()){
            $categorieslevel1->update([
                'category_name' => $req->category_name,
            ]);

            $categorieslevel1->meta()->update([
                'meta_title' => $req->meta_title,
                'meta_description'=> $req->meta_description,
                'canonical' => $req->canonical,
                'noindex' => $req->noindex,
                'json_ld' => $req->json_ld,
                'path_url' => $req->path_url,
            ]);

            return $this->successResponse($categorieslevel1->category_name. ' has been updated!', 200);
        }else{
            return $this->errorResponse($validator_cat->errors()->all(), 406);
        }
    }

    
    public function destroy(CategoryLevel1 $categorieslevel1)
    {
        $categorieslevel1->meta()->delete();
        $categorieslevel1->delete();
        $categorieslevel1->deleteMorphResidual();
        return $this->successResponse($categorieslevel1->category_name.' has been deleted', 200);
    }
}
