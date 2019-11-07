<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();
Route::middleware(['auth'])->group(function(){
	Route::get('/','HomeController@index')->name('home');

	Route::prefix('page')->group(function(){
		Route::get('tags','TagController@view')->name('tags');
		Route::get('images','ImageController@view')->name('images');
		Route::get('categories','CategoryLevel1Controller@view')->name('categories');
		Route::get('brands','BrandController@view')->name('brands');
		Route::resource('blogs', 'BlogController')->names([
			'index'=>'allblogs',
			'store'=>'addblog',
			'update'=>'updateblog',
			'destroy'=>'deleteblog',
			'show'=>'viewblog',
			'edit'=>'editblog',
			'create'=>'createblog',
		]);
	});

	Route::resource('images', 'ImageController')->names([
		'index'=>'allimages',
		'store'=>'addimage',
		'update'=>'updateimage',
		'destroy'=>'deleteimage',
		'show'=>'viewimage',
		'edit'=>'editimage',
		'create'=>'createimage',
	]);
	
	Route::resource('brand', 'BrandController')->except(['edit','create'])->names([
		'index'=>'allbrands',
		'store'=>'addbrand',
		'update'=>'updatebrand',
		'destroy'=>'deletebrand',
		'show'=>'viewbrand',
		'edit'=>'editbrand',
		'create'=>'createbrand',
	]);


	Route::resource('tags', 'TagController')->except([
		'edit','create'
	])->names([
		'index'=>'alltags',
		'store'=>'addtag',
		'update'=>'updatetag',
		'destroy'=>'deletetag',
		'show'=>'viewtag'
	]);

	Route::resource('categorieslevel1', 'CategoryLevel1Controller')->except([
		'edit','create'
	])->names([
		'index'=>'allcategorieslevel1',
		'store'=>'addcategorieslevel1',
		'update'=>'updatecategorieslevel1',
		'destroy'=>'deletecategorieslevel1',
		'show'=>'viewcategorieslevel1'
	]);
	Route::resource('categorieslevel2', 'CategoryLevel2Controller')->except([
		'edit','create'
	])->names([
		'index'=>'allcategorieslevel2',
		'store'=>'addcategorieslevel2',
		'update'=>'updatecategorieslevel2',
		'destroy'=>'deletecategorieslevel2',
		'show'=>'viewcategorieslevel2'
	]);

	Route::resource('categorieslevel3', 'CategoryLevel3Controller')->except([
		'edit','create'
	])->names([
		'index'=>'allcategorieslevel3',
		'store'=>'addcategorieslevel3',
		'update'=>'updatecategorieslevel3',
		'destroy'=>'deletecategorieslevel3',
		'show'=>'viewcategorieslevel3'
	]);

	Route::get('/logout','HomeController@logout')->name('logout');
});

Route::get('/clear-cache', 'HomeController@clearCache')->name('clearCache');
