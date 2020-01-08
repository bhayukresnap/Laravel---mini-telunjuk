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
        if(count($product) <= 0){
            return abort(404);
        }
        $alsoLike = \App\Product::all()->random(2);
        return view('main.product.landing',['product'=>$product,'alsoLike'=>$alsoLike]);
    }

    public function search(Request $request){

    }

}
