<?php

namespace App\Http\Controllers;
use App\Brand;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    public function index()
    {
        $brands = Brand::all();
        return view('main.brand.index',['brands'=>$brands]);
    }


    public function landingPage($slug){
    	$brand = Brand::whereHas('meta',function($q) use ($slug){
        	$q->where('path_url', $slug);
        })->with('thumbnail')->get();

    	

        return view('main.brand.landing',['brand'=>$brand]); 
    }
}
