<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

/*Route::get('/', function()
{
	return View::make('hello');
});*/

Route::get('/', array('uses' => 'App\Controllers\HomeController@showWelcome'));



/*=============================================
=                  API Routes                 =
=============================================*/

Route::group(array('prefix' => 'api', 'namespace' => 'App\Controllers'), function () {
    Route::resource('candidates', 'CandidatesController');
    Route::resource('elections', 'ElectionController');
});


/*=============================================
=                  Catch-All                  =
=============================================*/
App::missing(function($exception)
{
    return View::make('index');
});