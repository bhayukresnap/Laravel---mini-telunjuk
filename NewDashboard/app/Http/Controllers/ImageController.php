<?php

namespace App\Http\Controllers;

use Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use App\Image;
use Validator;
use App\Http\Controllers\ApiController;

class ImageController extends ApiController
{
    public function view(){
        return view('dashboard.images.index');
    }

    public function index()
    {
        $image = Image::orderBy('id','desc')->get();
        return response()->json(['data'=>$image,'code'=>200]);
    }

    public function create(){
        return view('dashboard.images.create');
    }

    public function store(Request $req)
    {
        $validator_image = Validator::make($req->all(),[
            'path' => 'required|image|max:1024|unique:images,path',
            'alt'=>'required'
        ],[
            'path.max' => 'Maximum size for image is 1mb',
            'alt.unique' => 'This image name has been already taken',
            'path.required' => 'Please upload your image',
            'path.image' => 'Only image is allowed!',
            'alt.required' => 'Please check the alt image',
        ]);
        if($validator_image->passes()){
            $image = $req->file('path');
            $new_name = $image->getClientOriginalName();            
            $new = new Image;
            $new->path = Storage::url(Storage::putFileAs('/public/gallery', new File($image), $new_name));
            $new->alt = $req->input('alt');
            $new->save();
            return $this->successResponse('Your image has been saved!', 200);
        }else{
            return $this->errorResponse($validator_image->errors()->all(), 406);
        }
    }

    public function show(Image $image)
    {
        //
    }


    public function edit(Image $image){
        $images = $image;
        return view('dashboard.images.update', compact('images'));
    }

    public function update(Request $req, Image $image)
    {
        $validator_image = Validator::make($req->all(),[
            'path' => 'image|max:1024|unique:images,path,' . $image->id,
            'alt'=>'required'
        ],[
            'path.max' => 'Maximum size for image is 1mb',
            'path.unique' => 'This image name has been already taken',
            'path.required' => 'Please upload your image',
            'path.image' => 'Only image is allowed!',
            'alt.required' => 'Please check the alt image',
        ]);

        if($validator_image->passes()){
            $imagefile = $req->file('path');
            if(!is_null($imagefile)){
                unlink(public_path($image->path));
                $new_name = $imagefile->getClientOriginalName();  
                $image->path = Storage::url(Storage::putFileAs('/public/gallery', new File($imagefile), $new_name));
            }
            $image->alt = $req->input('alt');
            $image->update();
            return $this->successResponse('Your image has been updated!', 200);
        }else{
            return $this->errorResponse($validator_image->errors()->all(), 406);
        }
    }

    public function destroy(Image $image)
    {
         unlink(public_path($image->path));
        $image->delete();
        return $this->successResponse($image->path.' has been deleted', 200);
    }
}
