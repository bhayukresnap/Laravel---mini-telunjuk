<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\MainController;
use Illuminate\Http\Request;
class CategoryController extends MainController
{
    public function indexLevel1(){
    	$categories = \App\CategoryLevel1::all();
    	return view('main.category.index',['categories'=>$categories]);
    }
    public function landingLevel1($slug, Request $request){
    	$parent = $this->getSlug('\App\CategoryLevel1',$slug);

        if(count($parent) <= 0){
            return abort(404);
        }

        $childs = \App\CategoryLevel2::where('categoryLvl1',$parent->first()->id)->get();

        $collection = \App\Product::whereHas('parentProduct.belongslevel2.belongslevel1',function($q) use ($parent){
                return $q->where('id',$parent->first()->id);
        });
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

        return view('main.category.landing_level_1', ['parent'=>$parent ,'products'=>$products,'childs'=>$childs]);
    }

    public function landingLevel2($slug_level1,$slug_level2,Request $request){
        $level1 = $this->getSlug('\App\CategoryLevel1',$slug_level1);
        if(count($level1) <= 0){
            return abort(404);
        }else{
            $parent = \App\CategoryLevel2::where('categoryLvl1',$level1->first()->id)->whereHas('meta',function($q) use ($slug_level2){
                $q->where('path_url', $slug_level2);
            })->get();
            if(count($parent)<=0){
                return abort(404);
            }
            
            $childs = \App\CategoryLevel3::where('categoryLvl2',$parent->first()->id)->get();

            $collection = \App\Product::whereHas('parentProduct.belongslevel2',function($q) use ($parent){
                    return $q->where('id',$parent->first()->id);
            });
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

            return view('main.category.landing_level_2', ['parent'=>$parent ,'products'=>$products,'childs'=>$childs,'breadcrumb_parent'=>$level1]);
        }
    }

    public function landingLevel3($slug_level1,$slug_level2,$slug_level3,Request $request){
        $level1 = $this->getSlug('\App\CategoryLevel1',$slug_level1);
        if(count($level1) <= 0){
            return abort(404);
        }else{
            $level2 = \App\CategoryLevel2::where('categoryLvl1',$level1->first()->id)->whereHas('meta',function($q) use ($slug_level2){
                $q->where('path_url', $slug_level2);
            })->get();
            if(count($level2)<=0){
                return abort(404);
            }else{
                $parent = \App\CategoryLevel3::where('categoryLvl2',$level2->first()->id)->whereHas('meta',function($q) use ($slug_level3){
                    $q->where('path_url', $slug_level3);
                })->get();
                if(count($parent)<=0){
                    return abort(404);
                }
                $collection = \App\Product::where('categoryId',$parent->first()->id);
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

                return view('main.category.landing_level_3', ['parent'=>$parent ,'products'=>$products,'breadcrumb'=>'main-plplevel3','level1'=>$level1,'level2'=>$level2]);
            }
        }
    }
}