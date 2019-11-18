<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('/dashboard-panel')->group(function(){
	Route::middleware(['auth:api'])->group(function(){
		Route::get('tags','TagController@view')->name('tags');
		Route::get('categories','CategoryLevel1Controller@view')->name('categories');
		Route::get('brands','BrandController@view')->name('brands');
		Route::get('stores','Dashboard\StoreController@view')->name('allstores');
	});
});


