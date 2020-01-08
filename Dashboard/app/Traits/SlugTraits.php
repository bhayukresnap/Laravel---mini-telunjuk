<?php
namespace App\Traits;
trait SlugTraits{
	public function getSlug($model,$slug){
		return $model::whereHas('meta',function($q) use ($slug){
            $q->where('path_url', $slug);
        })->get();
	}
}