<?php

Breadcrumbs::for('home', function ($trail) {
    $trail->push('Home', route('home'));
});

Breadcrumbs::for('main-brands', function ($trail) {
    $trail->parent('home');
    $trail->push('Brand', route('main-brands'));
});

Breadcrumbs::for('main-plpbrand', function ($trail, $brand) {
    $trail->parent('main-brands');
    $trail->push($brand->first()->brandName, route('main-plpbrand', $brand->first()->meta->path_url));
});

Breadcrumbs::for('main-allcategories', function($trail){
    $trail->parent('home');
    $trail->push('Category', route('main-allcategories'));
});

Breadcrumbs::for('main-plplevel1', function ($trail, $category) {
    $trail->parent('main-allcategories');
    $trail->push($category->first()->category_name, route('main-plplevel1', $category->first()->meta->path_url));
});

Breadcrumbs::for('main-plplevel2', function ($trail, $category, $level1) {
    $trail->parent('main-plplevel1',$level1);
    $trail->push($category->first()->category_name, route('main-plplevel2', ['slug_level1'=>$level1->first()->meta->path_url,'slug_level2'=>$category->first()->meta->path_url]));
});

Breadcrumbs::for('main-plplevel3', function ($trail, $category, $level1, $level2) {
    $trail->parent('main-plplevel2',$level2,$level1);
    $trail->push($category->first()->category_name, route('main-plplevel3', ['slug_level1'=>$level1->first()->meta->path_url,'slug_level2'=>$level2->first()->meta->path_url,'slug_level3'=>$category->first()->meta->path_url]));
});

Breadcrumbs::for('main-allproducts', function($trail){
    $trail->parent('home');
    $trail->push('Product', route('main-allproducts'));
});

Breadcrumbs::for('main-product', function ($trail, $product) {
    $trail->parent('main-allproducts');
    $trail->push($product->first()->product_name, route('main-product', $product->first()->meta->path_url));
});

Breadcrumbs::for('main-promo', function ($trail) {
    $trail->parent('home');
    $trail->push('Promo', route('main-promo'));
});

Breadcrumbs::for('main-blogs', function ($trail) {
    $trail->parent('home');
    $trail->push('Blog', route('main-blogs'));
});

Breadcrumbs::for('main-blogpost', function ($trail, $blog) {
    $trail->parent('main-blogs');
    $trail->push($blog->title, route('main-blogpost',$blog->meta->path_url));
});

Breadcrumbs::for('main-tags', function ($trail) {
    $trail->parent('home');
    $trail->push('Tag', route('main-tags'));
});

Breadcrumbs::for('main-tagpost', function ($trail, $tag) {
    $trail->parent('main-tags');
    $trail->push($tag->tagname, route('main-tagpost',$tag->meta->path_url));
});

Breadcrumbs::for('main-search', function ($trail) {
    $trail->parent('home');
    $trail->push('Search', route('main-search'));
});


// Dashboard
Breadcrumbs::for('dashboard.index', function ($trail) {
    $trail->push('Dashboard', route('dashboard.index'));
});

//Dashboard > Store
Breadcrumbs::for('stores', function ($trail) {
    $trail->parent('dashboard.index');
    $trail->push('Store', route('stores'));
});

Breadcrumbs::for('createstore', function ($trail) {
    $trail->parent('stores');
    $trail->push('Create Store', route('createstore'));
});

Breadcrumbs::for('editstore', function ($trail, $store) {
    $trail->parent('stores');
    $trail->push($store->store_name, route('editstore', $store->id));
});


//Dashboard > Brand
Breadcrumbs::for('brands', function ($trail) {
    $trail->parent('dashboard.index');
    $trail->push('Brand', route('brands'));
});

Breadcrumbs::for('createbrand', function ($trail) {
    $trail->parent('brands');
    $trail->push('Create Brand', route('createbrand'));
});

Breadcrumbs::for('editbrand', function ($trail, $brand) {
    $trail->parent('brands');
    $trail->push($brand->brandName, route('editbrand', $brand->id));
});

//Dashboard > Tag
Breadcrumbs::for('tags', function ($trail) {
    $trail->parent('dashboard.index');
    $trail->push('Tag', route('tags'));
});

Breadcrumbs::for('promotions', function ($trail) {
    $trail->parent('dashboard.index');
    $trail->push('Promotion', route('promotions'));
});

Breadcrumbs::for('createpromotion', function ($trail) {
    $trail->parent('promotions');
    $trail->push('Create Promotion', route('createpromotion'));
});

Breadcrumbs::for('updatepromotion', function ($trail, $promotion) {
    $trail->parent('promotions');
    $trail->push($promotion->title, route('updatepromotion', $promotion->id));
});

Breadcrumbs::for('createtag', function ($trail) {
    $trail->parent('tags');
    $trail->push('Create Tag', route('createtag'));
});

Breadcrumbs::for('edittag', function ($trail, $tag) {
    $trail->parent('tags');
    $trail->push($tag->tagname, route('edittag', $tag->id));
});

//Dashboard > Category
Breadcrumbs::for('categories', function ($trail) {
    $trail->parent('dashboard.index');
    $trail->push('Categories', route('categorieslevel1'));
});

Breadcrumbs::for('createcategorieslevel1', function ($trail) {
    $trail->parent('categories');
    $trail->push('Create categories level 1', route('createcategorieslevel1'));
});

Breadcrumbs::for('editcategorieslevel1', function ($trail, $category) {
    $trail->parent('categories');
    $trail->push($category->category_name, route('editcategorieslevel1', $category->id));
});

Breadcrumbs::for('editcategorieslevel2', function ($trail, $category) {
    $trail->parent('editcategorieslevel1', $category->belongsLevel1);
    $trail->push($category->category_name, route('editcategorieslevel2', $category->id));
});

Breadcrumbs::for('editcategorieslevel3', function ($trail, $level3breadcrumbs) {
    $trail->parent('editcategorieslevel2', $level3breadcrumbs->belongsLevel2);
    $trail->push($level3breadcrumbs->category_name, route('editcategorieslevel3', $level3breadcrumbs->id));
});

//Dashboard > Blog
Breadcrumbs::for('blogs', function ($trail) {
    $trail->parent('dashboard.index');
    $trail->push('Blog', route('blogs'));
});

Breadcrumbs::for('searchblog', function ($trail) {
    $trail->parent('blogs');
    $trail->push('Search blog', route('searchblog'));
});

Breadcrumbs::for('createblog', function ($trail) {
    $trail->parent('blogs');
    $trail->push('Create blog', route('createblog'));
});

Breadcrumbs::for('editblog', function ($trail, $blog) {
    $trail->parent('blogs');
    $trail->push($blog->title, route('editblog', $blog->id));
});

//Dashboard > Product
Breadcrumbs::for('products', function ($trail) {
    $trail->parent('dashboard.index');
    $trail->push('Product', route('products'));
});

Breadcrumbs::for('createproduct', function ($trail) {
    $trail->parent('products');
    $trail->push('Create Product', route('createproduct'));
});

Breadcrumbs::for('searchproduct', function ($trail) {
    $trail->parent('products');
    $trail->push('Search products', route('searchproduct'));
});

Breadcrumbs::for('editproduct', function ($trail, $product) {
    $trail->parent('products');
    $trail->push($product->product_name, route('editproduct', $product->id));
});