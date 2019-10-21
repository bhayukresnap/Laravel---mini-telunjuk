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
	
	Route::resource('tags', 'TagController')->except([
		'edit','create'
	])->names([
		'index'=>'alltags',
		'store'=>'addtag',
		'update'=>'updatetag',
		'destroy'=>'deletetag',
		'show'=>'viewtag'
	]);

	Route('/logout','HomeController@logout')->name('logout');
});

Route::get('/clear-cache', 'HomeController@clearCache')->name('clearCache');
