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


Route::prefix('/dashboard-panel')->group(function(){
	Auth::routes();
	
	Route::middleware(['auth'])->group(function(){
		Route::group(['prefix' => 'laravel-filemanager', 'middleware' => ['web', 'auth']], function () {
		    \UniSharp\LaravelFilemanager\Lfm::routes();
		});
		Route::get('/','Dashboard\IndexController@index')->name('dashboard.index');
		Route::resource('blogs', 'Dashboard\BlogController')->names([
			'index'=>'blogs',
			'store'=>'addblog',
			'update'=>'updateblog',
			'destroy'=>'deleteblog',
			'show'=>'viewblog',
			'edit'=>'editblog',
			'create'=>'createblog',
		]);

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

		Route::resource('categorieslevel1', 'Dashboard\CategoryLevel1Controller')->except([
			'edit','create'
		])->names([
			'index'=>'categorieslevel1',
			'store'=>'addcategorieslevel1',
			'update'=>'updatecategorieslevel1',
			'destroy'=>'deletecategorieslevel1',
			'show'=>'viewcategorieslevel1'
		]);
		Route::resource('categorieslevel2', 'Dashboard\CategoryLevel2Controller')->except([
			'edit','create'
		])->names([
			'index'=>'categorieslevel2',
			'store'=>'addcategorieslevel2',
			'update'=>'updatecategorieslevel2',
			'destroy'=>'deletecategorieslevel2',
			'show'=>'viewcategorieslevel2'
		]);

		Route::resource('categorieslevel3', 'Dashboard\CategoryLevel3Controller')->except([
			'edit','create'
		])->names([
			'index'=>'categorieslevel3',
			'store'=>'addcategorieslevel3',
			'update'=>'updatecategorieslevel3',
			'destroy'=>'deletecategorieslevel3',
			'show'=>'viewcategorieslevel3'
		]);

		Route::get('/logout','Dashboard\IndexController@logout')->name('logout');
		Route::get('/clear-cache', 'Dashboard\IndexController@clearCache')->name('clearCache');
	});
});
