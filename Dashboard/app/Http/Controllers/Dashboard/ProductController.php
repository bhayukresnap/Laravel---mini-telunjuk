<?php

namespace App\Http\Controllers\Dashboard;

use App\CategoryLevel3;
use App\Brand;
use App\Product;
use App\Store;
use App\Tag;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
class ProductController extends ApiController
{
    public function index()
    {
        return view('dashboard.product.index',['products'=>Product::all()]);
    }

    public function create()
    {
        return view('dashboard.product.create',['brands'=>Brand::all(), 'categories'=>CategoryLevel3::all(),'stores'=>Store::all()]);
    }

    public function store(Request $req)
    {
        return $req->file;
    }

    public function show(Product $product)
    {
        
    }

    public function edit(Product $product)
    {
        
    }

    public function update(Request $req, Product $product)
    {
        
    }

    public function destroy(Product $product)
    {
        
    }
}
