<?php

namespace App\Http\Controllers\Dashboard;
use Validator;
use App\CategoryLevel1;
use App\Meta;
use App\Thumbnail;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use App\Http\Controllers\DashboardController;
class CategoryLevel1Controller extends DashboardController
{
  	
    public function index()
    {
        $cat = CategoryLevel1::orderBy('id','asc')->get();
        return view('dashboard.category.index',['categories'=>$cat]);
    }

   
    public function create()
    {
        return view('dashboard.category.create_level_1');
    }
    
    public function store(Request $req)
    {
        $validator_cat = Validator::make($req->all(),[
            'category_name' => 'required|unique:categories_level_1,category_name',
            'original' => 'required',
            'path_url'=>'required|unique:metas,path_url'
        ],
        [
            'category_name.required' => 'Category name is required',
            'category_name.unique'=>'This category name has been taken',
            'path_url.required'=>'Slug is required',
            'original.required'=>'Image is required'
        ]);
        if($validator_cat->passes()){
            $cat = new CategoryLevel1;
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

    
    public function show(CategoryLevel1 $categorieslevel1)
    {
        return $categorieslevel1->with('meta')->whereId($categorieslevel1->id)->get();
    }

    
    public function edit(CategoryLevel1 $categorieslevel1)
    {
        return view('dashboard.category.update_level_1',['category'=>$categorieslevel1]);
    }

    
    public function update(Request $req, CategoryLevel1 $categorieslevel1)
    {
        $validator_cat = Validator::make($req->all(),[
            'category_name' => 'required|unique:categories_level_1,category_name,'. $categorieslevel1->id,
            'original' => 'required',
            'path_url'=>'required|unique:metas,path_url,'. $categorieslevel1->meta->id
        ],
        [
            'category_name.required' => 'Category name is required',
            'category_name.unique'=>'This category name has been taken',
            'path_url.required'=>'Slug is required',
            'original.required'=>'Image is required'
        ]
    );
        if($validator_cat->passes()){
            $categorieslevel1->update([
                'category_name' => $req->category_name,
            ]);

            $categorieslevel1->thumbnail()->update([
                'original' => $req->original,
                'alt'=> $req->alt,
            ]);
            
            $categorieslevel1->meta()->update([
                'meta_title' => $req->meta_title,
                'meta_description'=> $req->meta_description,
                'meta_keyword' => $req->meta_keyword,
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
        $categorieslevel1->delete();
        $categorieslevel1->deleteMorphResidual();
        return $this->successResponse($categorieslevel1->category_name.' has been deleted', 200);
    }
}
