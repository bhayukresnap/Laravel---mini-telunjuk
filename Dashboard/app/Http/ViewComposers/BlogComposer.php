<?php

namespace App\Http\ViewComposers;
use Illuminate\View\View;

class BlogComposer{

	public function compose(View $view){
    	$recents = \App\Blog::orderBy('id','desc')->take(3)->get();
    	$tags = \App\Tag::all();
		$view->with(['recents'=>$recents, 'tags'=>$tags]);
	}
}