<?php

namespace App\Http\Controllers\Dashboard;

use Validator;
use App\CategoryLevel1;
use App\CategoryLevel2;
use App\Meta;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use App\Http\Controllers\DashboardController;
class CategoryLevel2Controller extends DashboardController
{ 
    public function create()
    {
        return view('dashboard.category.create_level_2',['category_level_1'=> CategoryLevel1::all()]);
    }

    public function store(Request $req)
    {
        $validator_cat = Validator::make($req->all(),[
            'category_name' => 'required|unique:categories_level_2,category_name',
            'path_url'=>'required|unique:metas,path_url',
            'categoryLvl1'=>'required'
        ],
        [
            'categoryLvl1.required'=>'Please select category level 1'
        ]
    );
        if($validator_cat->passes()){
            $cat = new CategoryLevel2;
            $cat->categoryLvl1 = $req->categoryLvl1;
            $cat->category_name = $req->category_name;
            $meta = new Meta;
            $cat->save();
            $meta->metaable_id = $cat->id;
            $meta->meta_title = $req->meta_title;
            $meta->meta_description = $req->meta_description;
            $meta->meta_keyword = $req->meta_keyword;
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

    public function edit(CategoryLevel2 $categorieslevel2)
    {
        return view('dashboard.category.update_level_2',['category'=>$categorieslevel2,'category_level_1'=> CategoryLevel1::all()]);
    }

    public function show(CategoryLevel2 $categorieslevel2)
    {
        return $categorieslevel2->with('meta')->whereId($categorieslevel2->id)->get();
    }

    public function update(Request $req, CategoryLevel2 $categorieslevel2)
    {
        $validator_cat = Validator::make($req->all(),[
            'category_name' => 'required|unique:categories_level_2,category_name,'. $categorieslevel2->id,
            'path_url'=>'required|unique:metas,path_url,'. $categorieslevel2->meta->id
        ]);
        if($validator_cat->passes()){
            $categorieslevel2->update([
                'category_name' => $req->category_name,
                'categoryLvl1' => $req->categoryLvl1,
            ]);

            $categorieslevel2->meta()->update([
                'meta_title' => $req->meta_title,
                'meta_description'=> $req->meta_description,
                'meta_keyword' => $req->meta_keyword,
                'canonical' => $req->canonical,
                'noindex' => $req->noindex,
                'json_ld' => $req->json_ld,
                'path_url' => $req->path_url,
            ]);

            return $this->successResponse($categorieslevel2->category_name. ' has been updated!', 200);
        }else{
            return $this->errorResponse($validator_cat->errors()->all(), 406);
        }
    }

    public function destroy(CategoryLevel2 $categorieslevel2)
    {
        $categorieslevel2->delete();
        $categorieslevel2->deleteMorphResidual();
        return $this->successResponse($categorieslevel2->category_name.' has been deleted', 200);
    }
}
