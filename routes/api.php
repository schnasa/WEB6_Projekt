<?php

use App\Http\Controllers\ErsatzTerminController;
use App\Http\Controllers\LvaController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TerminController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('auth/login', [AuthController::class,'login']);

// methods which need authentication - JWT Token
Route::group(['middleware' => ['api','auth.jwt']], function(){


    Route::post('lvas', [LvaController::class, 'save']);

});

Route::group(['middleware' => ['api','assign.guard:users']], function(){
    Route::post('auth/login', [AuthController::class,'login']);
});

Route::group(['middleware' => ['api','assign.guard:suchenders']], function(){
    Route::post('auth/login/suchender', [AuthController::class,'login']);
    Route::put('termin/{id}', [TerminController::class, 'update']);
    Route::post('ersatztermin', [\App\Http\Controllers\ErsatzTerminController::class,'save']);
});

Route::put('lva/{id}', [LvaController::class,'update']);
Route::delete('lva/{id}', [LvaController::class,'delete']);
Route::post('auth/logout', [AuthController::class,'logout']);
Route::get('lvas', [LvaController::class, 'index']);
Route::get('ersatztermins', [ErsatzTerminController::class, 'ersatztermins']);
Route::get('lvas/{id}', [LvaController::class, 'findByID']);

