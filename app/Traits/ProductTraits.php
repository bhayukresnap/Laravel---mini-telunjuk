<?php
namespace App\Traits;

trait ProductTraits{

	private function maxproducts(){
		return 28;
	}
	public function sortDefault($collection){
		return $collection->paginate($this->maxproducts());
	}
	public function sortNameAsc($collection){
		return $collection->orderBy('product_name','asc')->paginate($this->maxproducts());
	}
	public function sortNameDesc($collection){
		return $collection->orderBy('product_name','desc')->paginate($this->maxproducts());
	}
	public function sortPriceAsc($collection){
		$collects = collect([])->paginate($this->maxproducts());
		$collection->get()->map(function($product){
			return $product->stores->map(function($value) use ($product){
				return $value;
			})->sortBy('pivot.price_after')->first();
		})->sortBy('pivot.price_after')->map(function($item) use ($collects){
			$collects->push(\App\Product::find($item->pivot->product_id));
		});
		return $collects;
	}
	public function sortPriceDesc($collection){
		$collects = collect([])->paginate($this->maxproducts());
		$collection->get()->map(function($product){
			return $product->stores->map(function($value) use ($product){
				return $value;
			})->sortBy('pivot.price_after')->first();
		})->sortByDesc('pivot.price_after')->map(function($item) use ($collects){
			$collects->push(\App\Product::find($item->pivot->product_id));
		});
		return $collects;
	}
}