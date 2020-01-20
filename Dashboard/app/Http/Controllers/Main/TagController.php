<?php

namespace App\Http\Controllers\Main;
use App\Http\Controllers\MainController;
use Illuminate\Http\Request;

class TagController extends MainController
{
    public function index(){
    	$tags = \App\Tag::all();
    	return view('main.tag.index',['tags'=>$tags]);
    }

    public function tagpost($slug){
    	$parent = $this->getSlug('\App\Tag',$slug);
    	$blogs = \App\Blog::whereHas('tags', function($q) use ($parent){
			$q->where('tag_id', $parent->first()->id);
        })->get()->paginate(9);
    	return view('main.tag.tagpost',['parent'=>$parent,'blogs'=>$blogs]);
    }

}
