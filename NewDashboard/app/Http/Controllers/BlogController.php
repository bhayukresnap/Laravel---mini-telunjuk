<?php

namespace App\Http\Controllers;
use App\Blog;
use Validator;
use App\Meta;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;

class BlogController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $blogs = Blog::all();
        return view('dashboard.blog.index', compact('blogs'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('dashboard.blog.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $req)
    {
        $validator_blog = Validator::make($req->all(),[
            'title' => 'required|unique:blogs,title',
            'path_url'=>'required|unique:metas,path_url',
            'featuredImage'=>'required',
            'alt'=>'required',
            'body_html'=>'required',
            'published_at'=> 'required',

        ]);

        if($validator_blog->passes()){
            $blog = new Blog;
            $blog->title = $req->title;
            $blog->featuredImage = $req->featuredImage;
            $blog->alt = $req->alt;
            $blog->published_at = $req->published_at;
            $meta = new Meta;
            $blog->save();
            $meta->metaable_id = $blog->id;
            $meta->meta_title = $req->meta_title;
            $meta->meta_description = $req->meta_description;
            $meta->body_html = $req->body_html;
            $meta->canonical = $req->canonical;
            $meta->noindex = $req->noindex;
            $meta->json_ld = $req->json_ld;
            $meta->path_url = $req->path_url;
            $blog->meta()->save($meta);
            return $this->successResponse('Your blog has been saved!', 200);
        }else{
            return $this->errorResponse($validator_blog->errors()->all(), 406);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function show(Blog $blog)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function edit(Blog $blog)
    {
        return view('dashboard.blog.update', compact('blog'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function update(Request $req, Blog $blog)
    {
        $validator_blog = Validator::make($req->all(),[
            'title' => 'required|unique:blogs,title,'.$blog->id,
            'path_url'=>'required|unique:metas,path_url,'.$blog->meta->id,
            'featuredImage'=>'required',
            'alt'=>'required',
            'body_html'=>'required',
            'published_at'=> 'required',

        ]);

        if($validator_blog->passes()){
            $blog->update([
                'title'=> $req->title,
                'featuredImage' => $req->featuredImage,
                'alt'=> $req->alt,
                'published_at'=> $req->published_at,
            ]);

            $blog->meta()->update([
                'meta_title' => $req->meta_title,
                'meta_description'=> $req->meta_description,
                'canonical' => $req->canonical,
                'body_html' => $req->input('body_html'),
                'noindex' => $req->noindex,
                'json_ld' => $req->json_ld,
                'path_url' => $req->path_url,
            ]);
            return $this->successResponse($blog->title. ' has been updated!', 200);
        }else{
            return $this->errorResponse($validator_blog->errors()->all(), 406);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function destroy(Blog $blog)
    {
        $blog->meta()->delete();
        $blog->delete();
        return $this->successResponse($blog->title.' has been deleted', 200);
    }
}
