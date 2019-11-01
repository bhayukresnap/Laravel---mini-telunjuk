<?php

namespace App\Http\Controllers;

use Validator;
use App\CategoryLevel3;
use App\Meta;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;;

class CategoryLevel3Controller extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $req)
    {
        $validator_cat = Validator::make($req->all(),[
            'category_name' => 'required|unique:categories_level_3,category_name',
            'path_url'=>'required|unique:metas,path_url',
            'categoryLvl2'=>'required'
        ],
        [
            'categoryLvl1.required'=>'Please select category level 1'
        ]
    );
        if($validator_cat->passes()){
            $cat = new CategoryLevel3;
            $cat->categoryLvl2 = $req->categoryLvl2;
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
     * @param  \App\CategoryLevel3  $categorieslevel3
     * @return \Illuminate\Http\Response
     */
    public function show(CategoryLevel3 $categorieslevel3)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CategoryLevel3  $categorieslevel3
     * @return \Illuminate\Http\Response
     */
    public function edit(CategoryLevel3 $categorieslevel3)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CategoryLevel3  $categorieslevel3
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CategoryLevel3 $categorieslevel3)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CategoryLevel3  $categorieslevel3
     * @return \Illuminate\Http\Response
     */
    public function destroy(CategoryLevel3 $categorieslevel3)
    {
        $categorieslevel3->meta()->delete();
        $categorieslevel3->delete();
        return $this->successResponse($categorieslevel3->category_name.' has been deleted', 200);
    }
}
