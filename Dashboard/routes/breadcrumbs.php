<?php

// Home
Breadcrumbs::for('dashboard.index', function ($trail) {
    $trail->push('Home', route('dashboard.index'));
});

// Home > About
Breadcrumbs::for('stores', function ($trail) {
    $trail->parent('dashboard.index');
    $trail->push('Store', route('stores'));
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