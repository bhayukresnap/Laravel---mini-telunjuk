<?php

namespace App\Http\Controllers\Dashboard;

use Validator;
use App\CategoryLevel2;
use App\CategoryLevel3;
use App\Meta;
use App\Thumbnail;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use App\Http\Controllers\DashboardController;

class CategoryLevel3Controller extends DashboardController
{
    public function create()
    {
        return view('dashboard.category.create_level_3',['category_level_2'=> CategoryLevel2::all()]);
    }

    public function store(Request $req)
    {
        $validator_cat = Validator::make($req->all(),[
            'category_name' => 'required|unique:categories_level_3,category_name',
            'original' => 'required',
            'path_url'=>'required|unique:metas,path_url',
            'categoryLvl2'=>'required'
        ],
        [
            'categoryLvl2.required'=>'Please select category level 2',
            'category_name.required' => 'Category name is required',
            'category_name.unique'=>'This category name has been taken',
            'path_url.required'=>'Slug is required',
            'original.required'=>'Image is required'
        ]
    );
        if($validator_cat->passes()){
            $cat = new CategoryLevel3;
            $cat->categoryLvl2 = $req->categoryLvl2;
            $cat->category_name = $req->category_name;
            $meta = new Meta;
            $cat->save();

            $thumbnail = new Thumbnail;
            $thumbnail->imageable_id = $cat->id;
            $thumbnail->original = $req->original;
            $thumbnail->alt = $req->alt;
            $cat->thumbnail()->save($thumbnail);

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
    public function show(CategoryLevel3 $categorieslevel3)
    {
        return $categorieslevel3->with('meta')->whereId($categorieslevel3->id)->get();
    }

    public function edit(CategoryLevel3 $categorieslevel3)
    {
        return view('dashboard.category.update_level_3',['category'=>$categorieslevel3,'category_level_2'=> CategoryLevel2::all()]);
    }

    public function update(Request $req, CategoryLevel3 $categorieslevel3)
    {
        $validator_cat = Validator::make($req->all(),[
            'category_name' => 'required|unique:categories_level_3,category_name,'. $categorieslevel3->id,
            'original' => 'required',
            'path_url'=>'required|unique:metas,path_url,'. $categorieslevel3->meta->id,
            'categoryLvl2'=>'required'
        ],
        [
            'categoryLvl2.required'=>'Please select category level 2',
            'category_name.required' => 'Category name is required',
            'category_name.unique'=>'This category name has been taken',
            'path_url.required'=>'Slug is required',
            'original.required'=>'Image is required'
        ]
    );
        if($validator_cat->passes()){
            $categorieslevel3->update([
                'category_name' => $req->category_name,
                'categoryLvl2' => $req->categoryLvl2,
            ]);

            $categorieslevel3->thumbnail()->update([
                'original' => $req->original,
                'alt'=> $req->alt,
            ]);

            $categorieslevel3->meta()->update([
                'meta_title' => $req->meta_title,
                'meta_description'=> $req->meta_description,
                'meta_keyword' => $req->meta_keyword,
                'canonical' => $req->canonical,
                'noindex' => $req->noindex,
                'json_ld' => $req->json_ld,
                'path_url' => $req->path_url,
            ]);

            return $this->successResponse($categorieslevel3->category_name. ' has been updated!', 200);
        }else{
            return $this->errorResponse($validator_cat->errors()->all(), 406);
        }
    }

    public function destroy(CategoryLevel3 $categorieslevel3)
    {
        $categorieslevel3->delete();
        $categorieslevel3->deleteMorphResidual();
        return $this->successResponse($categorieslevel3->category_name.' has been deleted', 200);
    }
}
