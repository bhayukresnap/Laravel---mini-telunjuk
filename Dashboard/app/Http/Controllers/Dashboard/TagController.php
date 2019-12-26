<?php

namespace App\Http\Controllers\Dashboard;

use Validator;
use App\Tag;
use App\Meta;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use App\Http\Controllers\DashboardController;

class TagController extends DashboardController
{
    public function index()
    {
        $tags = Tag::orderBy('id','asc')->paginate(25);
        return view('dashboard.tag.index',compact(['tags']));
    }

    public function create()
    {
        return view('dashboard.tag.create');
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
            $meta->meta_keyword = $req->meta_keyword;
            $meta->canonical = $req->canonical;
            $meta->noindex = $req->noindex;
            $meta->json_ld = $req->json_ld;
            $meta->path_url = $req->path_url;
            $tag->meta()->save($meta);
            return $this->successResponse('Your tag has been saved!', 200);
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
       return view('dashboard.tag.update', ['tag'=>$tag]);
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
                'meta_keyword' => $req->meta_keyword,
                'canonical' => $req->canonical,
                'noindex' => $req->noindex,
                'json_ld' => $req->json_ld,
                'path_url' => $req->path_url,
            ]);
            return $this->successResponse($tag->tagname.' tag has been updated!', 200);
            //return $this->successResponse('Your tag has been saved!', 200);
        }else{
            return $this->errorResponse($validator_tag->errors()->all(), 406);
        }
    }

    public function destroy(Tag $tag)
    {
        $tag->delete();
        $tag->deleteMorphResidual();
        return $this->successResponse($tag->tagname.' has been deleted', 200);
    }
}
