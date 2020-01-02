<?php

namespace App\Http\Controllers\Main;
use App\Brand;
use App\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\MainController;
use DB;
class BrandController extends MainController
{
    public function index()
    {
        $parents = Brand::all();
        return view('main.brand.index',['brands'=>$parents]);
    }


    public function landingPage($slug, Request $request){
        
        $parent = Brand::whereHas('meta',function($q) use ($slug){
            $q->where('path_url', $slug);
        })->get();
        if(count($parent) <= 0){
            return abort(404);
        }
        if($request->filter == 'name_asc'){
            $products = Product::where('brandId', $parent->first()->id)->orderBy('product_name','asc')->paginate(28);
        }else if($request->filter == 'name_desc'){
            $products = Product::where('brandId', $parent->first()->id)->orderBy('product_name','desc')->paginate(28);
        }else if($request->filter == 'price_asc'){
            $collects = collect();
            $sort = Product::all()->map(function($product){
                return $product->stores->map(function($value) use ($product){
                    return $value;
                })->sortBy('pivot.original_price')->first();
            })->sortBy('pivot.original_price')->map(function($item) use ($collects){
                $collects->push(Product::find($item->pivot->product_id));
            });
            $products = collect($collects)->paginate(28);
        }else if($request->filter == 'price_desc'){
            $products = collect([])->paginate(28);
            $sort = Product::all()->map(function($product){
                return $product->stores->map(function($value) use ($product){
                    return $value->pivot;
                })->sortBy('pivot.original_price')->first();
            });
            return $sort;
        }else{
            $products = Product::where('brandId', $parent->first()->id)->paginate(28);
        }
        return view('main.brand.landing',['brand'=>$parent, 'products'=>$products]); 
    }
}
