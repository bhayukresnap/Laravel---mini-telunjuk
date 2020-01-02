<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function indexLevel1(){
    	$categories = \App\CategoryLevel1::all();
    	return view('main.category_level1.index',['categories'=>$categories]);
    }
    public function landingLevel1($slug){
    	$parent = \App\CategoryLevel1::whereHas('meta',function($q) use ($slug){
            $q->where('path_url', $slug);
        })->get();

        $products =  \App\Product::whereHas('parentProduct.belongslevel2.belongslevel1',function($q) use ($parent){
            return $q->where('id',$parent->first()->id);
        })->paginate(28);

        return view('main.category_level1.landing', ['parent'=>$parent ,'products'=>$products]);
    }
}
