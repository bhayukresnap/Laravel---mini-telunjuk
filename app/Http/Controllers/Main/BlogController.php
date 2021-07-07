<?php

namespace App\Http\Controllers\Main;
use Carbon\Carbon;
use App\Blog;
use App\Tag;
use Illuminate\Http\Request;
use App\Http\Controllers\MainController;
class BlogController extends MainController
{
    public function index(){
    	$current = Carbon::now();
    	$blogs = Blog::where([
    		['published_at','<', $current],
    	])->get()->sortByDesc('id')->paginate(9);
    	return view('main.blog.index',['blogs'=>$blogs]);
    }

    public function blogpost($slug){

    	$parent = $this->getSlug('\App\Blog',$slug);

    	return view('main.blog.blogpost',['parent'=>$parent]);
    }
}
