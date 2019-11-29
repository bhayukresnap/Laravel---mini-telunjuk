<?php

namespace App\Http\Controllers\Dashboard;
use Validator;
use Cache;
use App\CategoryLevel3;
use App\Brand;
use App\Product;
use App\Store;
use App\Tag;
use App\Thumbnail;
use App\Meta;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
class ProductController extends ApiController
{
    public function index()
    {
        return view('dashboard.product.index',['products'=>Product::paginate(25)]);
    }

    public function create()
    {
        return view('dashboard.product.create',['brands'=>Brand::all(), 'categories'=>CategoryLevel3::all(),'stores'=>Store::all()]);
    }

    public function search(Request $req){

        $empty_result = view('dashboard.product.search',['req'=>$req]);

        if(empty($req->q)){
            $req->q = '';
            return $empty_result;
        }
        
        $products = Product::whereLike(['product_name'], $req->q)->get();
        if(count($products) == 0){
            return $empty_result;
        }

        return view('dashboard.product.search', ['products'=>$products, 'req'=>$req]);
    }

    public function store(Request $req)
    {
        $validator_product = Validator::make($req->all(),[
            'original.*' => 'required',
            'path_url'=>'required|unique:metas,path_url',
            'product_name'=>'required|unique:products,product_name',
            'brand'=>'required',
            'category'=>'required',
            'original_price.*' => 'required|numeric',
            'current_price.*' => 'nullable|numeric'
        ],[
            'original.*.required'=> 'Please fill all image fields!',
            'product_name.required'=>'Please check the product name',
            'product_name.unique'=>'This product name has already been taken',
            'brand.required'=> 'Please select the brand',
            'category.required'=> 'Please select the category',
            'path_url.required'=>'Slug is required',
            'path_url.unique'=> 'This slug has already been taken',
            'original_price.*.numeric' => 'Only number is allowed for Original price',
            'current_price.*.numeric' => 'Only number is allowed for Current price',
        ]);

        if($validator_product->passes()){
            $product = new Product;
            $product->product_name = $req->product_name;
            $product->brandId = $req->brand;
            $product->categoryId = $req->category;
            $product->save();
            foreach($req->original as $original){
                $thumbnail = new Thumbnail;
                $thumbnail->imageable_id = $product->id;
                $thumbnail->original = $original;
                $thumbnail->alt = $req->product_name;
                $product->thumbnail()->save($thumbnail);
            }
            $product_array = [];
            for($x = 0; $x<count($req->store); $x++){
                $item = [
                    $req->store[$x] => ['original_price'=>$req->original_price[$x], 'current_price'=>  $req->current_price[$x], 'url_destination' => $req->link_store[$x]]
                ];
                $product_array += $item;
            }
            $product->stores()->sync($product_array);
            $meta = new Meta;
            $meta->metaable_id = $product->id;
            $meta->meta_title = $req->meta_title;
            $meta->meta_description = $req->meta_description;
            $meta->meta_keyword = $req->meta_keyword;
            $meta->body_html = $req->body_html;
            $meta->canonical = $req->canonical;
            $meta->noindex = $req->noindex;
            $meta->json_ld = $req->json_ld;
            $meta->path_url = $req->path_url;
            $product->meta()->save($meta);
            return $this->successResponse('Your store has been saved!', 200);
        }else{
            return $this->errorResponse($validator_product->errors()->all(), 406);
        }
    }

    public function show(Product $product)
    {
        
    }

    public function edit(Product $product)
    {
        return view('dashboard.product.update',['brands'=>Brand::all(), 'categories'=>CategoryLevel3::all(),'stores'=>Store::all(),'product'=>$product]);
    }

    public function update(Request $req, Product $product)
    {
         $validator_product = Validator::make($req->all(),[
            'original.*' => 'required',
            'path_url'=>'required|unique:metas,path_url,'.$product->meta->id,
            'product_name'=>'required|unique:products,product_name,'.$product->id,
            'brand'=>'required',
            'category'=>'required',
            'original_price.*' => 'required|numeric',
            'current_price.*' => 'nullable|numeric'
        ],[
            'original.*.required'=> 'Please fill all image fields!',
            'product_name.required'=>'Please check the product name',
            'product_name.unique'=>'This product name has already been taken',
            'brand.required'=> 'Please select the brand',
            'category.required'=> 'Please select the category',
            'path_url.required'=>'Slug is required',
            'path_url.unique'=> 'This slug has already been taken',
            'original_price.*.numeric' => 'Only number is allowed for Original price',
            'current_price.*.numeric' => 'Only number is allowed for Current price',
        ]);

         if($validator_product->passes()){

            $product->update([
                'product_name'=> $req->product_name,
                'categoryId'=> $req->category,
                'brandId'=> $req->brand
            ]);

            $product->thumbnail()->delete();
            foreach($req->original as $original){
                $thumbnail = new Thumbnail;
                $thumbnail->imageable_id = $product->id;
                $thumbnail->original = $original;
                $thumbnail->alt = $req->product_name;
                $product->thumbnail()->save($thumbnail);
            }

            $product_array = [];
            for($x = 0; $x<count($req->store); $x++){
                $item = [
                    $req->store[$x] => ['original_price'=>$req->original_price[$x], 'current_price'=>  $req->current_price[$x], 'url_destination' => $req->link_store[$x]]
                ];
                $product_array += $item;
            }
            $product->stores()->sync($product_array);

            $product->meta()->update([
                'meta_title' => $req->meta_title,
                'meta_description'=> $req->meta_description,
                'meta_keyword' => $req->meta_keyword,
                'canonical' => $req->canonical,
                'body_html' => $req->input('body_html'),
                'noindex' => $req->noindex,
                'json_ld' => $req->json_ld,
                'path_url' => $req->path_url,
            ]);
          return $this->successResponse($product->product_name. ' has been updated!', 200);
        }else{
            return $this->errorResponse($validator_product->errors()->all(), 406);
        }
    }

    public function destroy(Product $product)
    {
        $product->delete();
        $product->deleteMorphResidual();
        return $this->successResponse($product->product_name.' has been deleted', 200);
    }
}
