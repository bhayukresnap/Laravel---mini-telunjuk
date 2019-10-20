<?php

namespace App\Http\Controllers;

use Validator;
use App\Tag;
use App\Meta;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use App\Http\Controllers\ApiController;

class TagController extends ApiController
{
    public function view(){
        return view('dashboard.tags.index');
    }

    public function index()
    {
        // $tag = Tag::with('meta')->orderBy('id','desc')->get();
        // return response()->json(['data'=>$tag,'code'=>200]);
        $tag = Tag::all();
        return $this->showAll($tag);
    }
    public function store(Request $req)
    {
        $validator_tag = Validator::make($req->all(),[
            'tagname' => 'required|unique:tags,tagname',
            'path_url'=>'required|unique:metas,path_url'
        ]);
        if($validator_tag->passes()){
            $tag = new Tag;
            $tag->tagname = $req->tagname;
            $meta = new Meta;
            $tag->save();
            $meta->metaable_id = $tag->id;
            $meta->meta_title = $req->meta_title;
            $meta->meta_description = $req->meta_description;
            $meta->canonical = $req->canonical;
            $meta->noindex = $req->noindex;
            $meta->json_ld = $req->json_ld;
            $meta->path_url = $req->path_url;
            $tag->meta()->save($meta);
            return $this->successResponse('Your tag has been saved!', 200);
            //return $this->successResponse('Your tag has been saved!', 200);
        }else{
            return $this->errorResponse($validator_tag->errors()->all(), 406);
        }
    }
    public function show(Tag $tag)
    {
        $tag = $tag->with('meta')->where('id',$tag->id)->get();
        return $this->showAll($tag);
    }

    public function edit(Tag $tag)
    {
        //
    }

    public function update(Request $req, Tag $tag)
    {
        $validator_tag = Validator::make($req->all(),[
            'tagname' => 'required|unique:tags,tagname,'.$tag->id,
            'path_url'=>'required|unique:metas,path_url,'.$tag->meta->id,
        ]);

        if($validator_tag->passes()){
            $tag->update([
                'tagname' => $req->tagname,
            ]);
            $tag->meta()->update([
                'meta_title' => $req->meta_title,
                'meta_description'=> $req->meta_description,
                'canonical' => $req->canonical,
                'noindex' => $req->noindex,
                'json_ld' => $req->json_ld,
                'path_url' => $req->path_url,
            ]);
            return $this->successResponse($tag->tagname.' tag has been updated!', 200);
            //return $this->successResponse('Your tag has been saved!', 200);
        }else{
            return $this->errorResponse($req, 406);
        }
    }

    public function destroy(Tag $tag)
    {
        $tag->meta()->delete();
        $tag->delete();
        return $this->successResponse($tag->tagname.' has been deleted', 200);
    }
}