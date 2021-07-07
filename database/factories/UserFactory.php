<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Blog;
use App\Meta;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Blog::class, function (Faker $faker) {
    return [
        'Title' => $faker->name,
        'featuredImage' => $faker->randomElement(['http://localhost/storage/photos/1/6.jpg','http://localhost/storage/photos/1/1.jpg','http://localhost/storage/photos/1/2.jpg','http://localhost/storage/photos/1/3.jpg']),
        'alt' => 'ASD',
        'published_at' => now(),
    ];
});

$factory->define(Meta::class, function (Faker $faker) {
	static $number = 1;
    return [
        'path_url' => $faker->name,
        'metaable_id' => $number++,
        'metaable_type' => Blog::class,
        'body_html'=>$faker->name,
    ];
});
