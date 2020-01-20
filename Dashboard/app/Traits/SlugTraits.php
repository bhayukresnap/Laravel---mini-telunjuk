<?php
namespace App\Traits;
trait SlugTraits{
	public function getSlug($model,$slug){
		$data = $model::whereHas('meta',function($q) use ($slug){
            $q->where('path_url', $slug);
        })->get();
        return count($data) <= 0 ? abort(404) : $data;
	}
}