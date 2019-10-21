<?php

namespace App\Http\Controllers;

use Validator;
use App\CategoryLevel2;
use App\Meta;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
class CategoryLevel2Controller extends ApiController
{
    
    public function index()
    {
        $cat = CategoryLevel2::all();
        return $this->showAll($cat);
    }

    
    public function create()
    {
        
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

    /**
     * Display the specified resource.
     *
     * @param  \App\CategoryLevel2  $categoryLevel2
     * @return \Illuminate\Http\Response
     */
    public function show(CategoryLevel2 $categoryLevel2)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CategoryLevel2  $categoryLevel2
     * @return \Illuminate\Http\Response
     */
    public function edit(CategoryLevel2 $categoryLevel2)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CategoryLevel2  $categoryLevel2
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CategoryLevel2 $categoryLevel2)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CategoryLevel2  $categoryLevel2
     * @return \Illuminate\Http\Response
     */
    public function destroy(CategoryLevel2 $categoryLevel2)
    {
        //
    }
}
