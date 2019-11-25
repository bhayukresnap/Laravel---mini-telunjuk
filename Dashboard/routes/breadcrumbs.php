<?php

// Home
Breadcrumbs::for('dashboard.index', function ($trail) {
    $trail->push('Dashboard', route('dashboard.index'));
});

//Home > Store
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


//Home > Brand
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

//Home > Tag
Breadcrumbs::for('tags', function ($trail) {
    $trail->parent('dashboard.index');
    $trail->push('Tag', route('tags'));
});

Breadcrumbs::for('createtag', function ($trail) {
    $trail->parent('tags');
    $trail->push('Create Tag', route('createtag'));
});

Breadcrumbs::for('edittag', function ($trail, $tag) {
    $trail->parent('tags');
    $trail->push($tag->tagname, route('edittag', $tag->id));
});

//Home > Category
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

//Home > Blog
Breadcrumbs::for('blogs', function ($trail) {
    $trail->parent('dashboard.index');
    $trail->push('Blog', route('blogs'));
});

Breadcrumbs::for('createblog', function ($trail) {
    $trail->parent('blogs');
    $trail->push('Create blog', route('createblog'));
});

Breadcrumbs::for('editblog', function ($trail, $blog) {
    $trail->parent('blogs');
    $trail->push($blog->title, route('editblog', $blog->id));
});