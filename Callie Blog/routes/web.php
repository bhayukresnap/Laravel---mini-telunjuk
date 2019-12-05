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

Route::prefix('dashboard-panel')->group(function(){
	Auth::routes();
	Route::middleware(['auth'])->group(function(){
		Route::group(['prefix' => 'laravel-filemanager', 'middleware' => ['web', 'auth']], function () {
		    \UniSharp\LaravelFilemanager\Lfm::routes();
		});
		Route::get('/','Dashboard\IndexController@index')->name('dashboard.index');
		Route::get('/logout','Dashboard\IndexController@logout')->name('logout');
	});
});

Route::get('/', function () {
    return view('index');
});
