<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\MainController;
use Illuminate\Http\Request;

class ProductController extends MainController
{
    public function index(Request $request){
    	$collection = \App\Product::where('id','!=',null);
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

    	return view('main.product.index',['products'=>$products]);
    }

    public function pip($slug){
        $product = $this->getSlug('\App\Product',$slug);
        if(count(\App\Product::all()) > 10){
            $items = 10;
        }else{
            $items = count(\App\Product::all());
        }
        $alsoLike = \App\Product::all()->random($items);
        return view('main.product.landing',['product'=>$product,'alsoLike'=>$alsoLike]);
    }

    public function search(Request $request){
        $empty_result = view('main.product.search',['req'=>$request]);

        if(empty($request->q)){
            $request->q = '';
            return $empty_result;
        }
        
        $collection = \App\Product::whereLike(['product_name'], $request->q);
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
        if(count($products) == 0){
            return $empty_result;
        }

        return view('main.product.search', ['products'=>$products, 'req'=>$request]);
    }

}
