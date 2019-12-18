<?php

namespace App\Http\Controllers;
use App\Brand;
use App\Product;
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
        })->get();

       

        $products = Product::where('brandId', $brand->first()->id)->paginate(28);
        
        return view('main.brand.landing',['brand'=>$brand, 'products'=>$products]); 
    }
}
