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



/*=============================================
=                  API Routes                 =
=============================================*/

Route::group(array('prefix' => 'api', 'namespace' => 'App\Controllers'), function () {
    Route::resource('candidates', 'CandidatesController', array('except' => array('create', 'edit')));
    Route::resource('elections', 'ElectionController', array('except' => array('create', 'edit')));
    
    /*Route::get('/elections', array('uses' => 'ElectionController@index'));
    Route::get('/elections/{id}/{district?}', array('uses' => 'ElectionController@show'));*/
});


/*=============================================
=                  Catch-All                  =
=============================================*/
Route::any('{path?}', function() 
{
    // redirect to Ember index
    Redirect::to('index.html');
});