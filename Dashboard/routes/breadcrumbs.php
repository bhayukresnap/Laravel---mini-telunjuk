<?php

// Home
Breadcrumbs::for('dashboard.index', function ($trail) {
    $trail->push('Home', route('dashboard.index'));
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



// Home > Blog
Breadcrumbs::for('blog', function ($trail) {
    $trail->parent('home');
    $trail->push('Blog', route('blog'));
});

// Home > Blog > [Category]
Breadcrumbs::for('category', function ($trail, $category) {
    $trail->parent('blog');
    $trail->push($category->title, route('category', $category->id));
});

// Home > Blog > [Category] > [Post]
Breadcrumbs::for('post', function ($trail, $post) {
    $trail->parent('category', $post->category);
    $trail->push($post->title, route('post', $post->id));
});