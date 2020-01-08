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

Route::prefix('/')->group(function(){
	Route::get('/','Main\HomeController@index')->name('home');
	Route::get('/cat/', 'Main\CategoryController@indexLevel1')->name('main-allcategories');
	Route::get('/cat/{slug}', 'Main\CategoryController@landingLevel1')->name('main-plplevel1');
	Route::get('/cat/{slug_level1}/{slug_level2}', 'Main\CategoryController@landingLevel2')->name('main-plplevel2');
	Route::get('/cat/{slug_level1}/{slug_level2}/{slug_level3}', 'Main\CategoryController@landingLevel3')->name('main-plplevel3');
	Route::get('/products/', 'Main\ProductController@index')->name('main-allproducts');
	Route::get('/products/{slug}', 'Main\ProductController@pip')->name('main-product');
	Route::get('/brands','Main\BrandController@index')->name('main-brands');
	Route::get('/brands/{slug}', 'Main\BrandController@landingPage')->name('main-plpbrand');
});


Route::prefix('/dashboard-panel')->group(function(){
	Auth::routes();
	
	Route::middleware(['auth'])->group(function(){
		Route::group(['prefix' => 'laravel-filemanager', 'middleware' => ['web', 'auth']], function () {
		    \UniSharp\LaravelFilemanager\Lfm::routes();
		});
		Route::get('/','Dashboard\IndexController@index')->name('dashboard.index');
		Route::get('/blogs/search', 'Dashboard\BlogController@search')->name('searchblog');
		Route::resource('blogs', 'Dashboard\BlogController')->names([
			'index'=>'blogs',
			'store'=>'addblog',
			'update'=>'updateblog',
			'destroy'=>'deleteblog',
			'show'=>'viewblog',
			'edit'=>'editblog',
			'create'=>'createblog',
		]);		
		Route::get('/products/search', 'Dashboard\ProductController@search')->name('searchproduct');
		Route::resource('products', 'Dashboard\ProductController')->names([
			'index'=>'products',
			'store'=>'addproduct',
			'update'=>'updateproduct',
			'destroy'=>'deleteproduct',
			'show'=>'viewproduct',
			'edit'=>'editproduct',
			'create'=>'createproduct',
		]);

		Route::resource('brands', 'Dashboard\BrandController')->names([
			'index'=>'brands',
			'store'=>'addbrand',
			'update'=>'updatebrand',
			'destroy'=>'deletebrand',
			'show'=>'viewbrand',
			'edit'=>'editbrand',
			'create'=>'createbrand',
		]);

		Route::resource('stores', 'Dashboard\StoreController')->names([
			'index'=>'stores',
			'create'=>'createstore',
			'store'=>'addstore',
			'edit'=>'editstore',
			'update'=>'updatestore',
			'destroy'=>'deletestore',
			'show'=>'viewstore',
		]);


		Route::resource('tags', 'Dashboard\TagController')->names([
			'index'=>'tags',
			'store'=>'addtag',
			'update'=>'updatetag',
			'destroy'=>'deletetag',
			'show'=>'viewtag',
			'edit'=>'edittag',
			'create'=>'createtag',
		]);

		Route::resource('categorieslevel1', 'Dashboard\CategoryLevel1Controller')->names([
			'index'=>'categorieslevel1',
			'store'=>'addcategorieslevel1',
			'update'=>'updatecategorieslevel1',
			'destroy'=>'deletecategorieslevel1',
			'show'=>'viewcategorieslevel1',
			'edit'=>'editcategorieslevel1',
			'create'=>'createcategorieslevel1',
		]);
		Route::resource('categorieslevel2', 'Dashboard\CategoryLevel2Controller')->except(['index'])->names([
			'store'=>'addcategorieslevel2',
			'update'=>'updatecategorieslevel2',
			'destroy'=>'deletecategorieslevel2',
			'show'=>'viewcategorieslevel2',
			'edit'=>'editcategorieslevel2',
			'create'=>'createcategorieslevel2',
		]);

		Route::resource('categorieslevel3', 'Dashboard\CategoryLevel3Controller')->except(['index'])->names([
			'store'=>'addcategorieslevel3',
			'update'=>'updatecategorieslevel3',
			'destroy'=>'deletecategorieslevel3',
			'show'=>'viewcategorieslevel3',
			'edit'=>'editcategorieslevel3',
			'create'=>'createcategorieslevel3',
		]);

		Route::get('/logout','Dashboard\IndexController@logout')->name('logout');
		Route::get('/clear-cache', 'Dashboard\IndexController@clearCache')->name('clearCache');
	});
});
