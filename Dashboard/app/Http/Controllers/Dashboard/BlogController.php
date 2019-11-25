<?php

namespace App\Http\Controllers\Dashboard;
use App\Blog;
use App\Tag;
use App\Meta;
use App\Thumbnail;
use Validator;

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
        $blogs = Blog::paginate(25);
        return view('dashboard.blog.index', compact('blogs'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('dashboard.blog.create',['tags'=>Tag::all()]);
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
            'original'=>'required',
            'alt'=>'required',
            'tag'=>'required',
            'body_html'=>'required',
            'published_at'=> 'required',
        ],
            [
                'title.required'=>'Page title is required',
                'body_html.required' =>'Body is required',
                'original.required'=>'Thumbnail image is required',
                'tag.required'=> 'Tag is required'
            ]
    );
        
        if($validator_blog->passes()){
            $blog = new Blog;
            $blog->title = $req->title;
            $blog->published_at = $req->published_at;
            $thumbnail = new Thumbnail;
            $thumbnail->imageable_id = $blog->id;
            $thumbnail->original = $req->original;
            $thumbnail->alt = $req->alt;
            $meta = new Meta;
            $meta->metaable_id = $blog->id;
            $meta->meta_title = $req->meta_title;
            $meta->meta_description = $req->meta_description;
            $meta->meta_keyword = $req->meta_keyword;
            $meta->body_html = $req->body_html;
            $meta->canonical = $req->canonical;
            $meta->noindex = $req->noindex;
            $meta->json_ld = $req->json_ld;
            $meta->path_url = $req->path_url;
            $blog->save();
            $blog->tags()->sync($req->tag);
            $blog->meta()->save($meta);
            $blog->thumbnail()->save($thumbnail);
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
        return view('dashboard.blog.update', ['tags' => Tag::all(), 'blog'=>$blog]);
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
            'original'=>'required',
            'alt'=>'required',
            'tag'=>'required',
            'body_html'=>'required',
            'published_at'=> 'required',

        ]);

        if($validator_blog->passes()){
            $blog->update([
                'title'=> $req->title,
                'published_at'=> $req->published_at,
            ]);

            $blog->tags()->sync($req->tag);
            $blog->thumbnail()->update([
                'original' => $req->original,
                'alt'=> $req->alt,
            ]);
            $blog->meta()->update([
                'meta_title' => $req->meta_title,
                'meta_description'=> $req->meta_description,
                'meta_keyword' => $req->meta_keyword,
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

    public function destroy(Blog $blog)
    {
        $blog->delete();
        $blog->deleteMorphResidual();
        return $this->successResponse($blog->title.' has been deleted', 200);
    }
}
