<?php

namespace App\Http\Controllers\Main;
use Illuminate\Http\Request;
use App\Http\Controllers\MainController;
class BrandController extends MainController
{
    public function index()
    {
        $parents = \App\Brand::all();
        return view('main.brand.index',['brands'=>$parents]);
    }


    public function landingPage($slug, Request $request){
        
        $parent = $this->getSlug('\App\Brand',$slug);
        
        $collection =\App\Product::where('brandId', $parent->first()->id);

        if($request->filter == 'name_asc'){
            $products = $this->sortNameAsc($collection);
        }else if($request->filter == 'name_desc'){
            $products = $this->sortNameDesc($collection);
        }else if($request->filter == 'price_asc'){
            $products = $this->sortPriceAsc($collection);
        }else if($request->filter == 'price_desc'){
            $products = $this->sortPriceDesc($collection);
        }else{
            $products = $this->sortDefault($collection);
        }

        return view('main.brand.landing',['brand'=>$parent, 'products'=>$products]); 
    }
}