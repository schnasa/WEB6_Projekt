<?php

use App\Http\Controllers\LvaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

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

Route::middleware('auth:api')->get('/nachhilfegeber', function (Request $request) {
    return $request->user();
});

// methods which need authentication - JWT Token
Route::group(['middleware' => ['api','assign.guard:users']], function(){
    Route::post('auth/login', [AuthController::class,'login']);
});

Route::group(['middleware' => ['api','assign.guard:suchenders']], function(){
    Route::post('auth/login/suchender', [AuthController::class,'login']);
});

Route::post('lva', [LvaController::class,'save']);
Route::put('lva/{id}', [LvaController::class,'update']);
Route::delete('lva/{id}', [LvaController::class,'delete']);
Route::post('auth/logout', [AuthController::class,'logout']);

/*
 *
 *
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('auth/login', [AuthController::class,'login']);

// methods which need authentication - JWT Token
Route::group(['middleware' => ['api','auth.jwt']], function(){
    Route::post('lva', [LvaController::class,'save']);
    Route::put('lva/{id}', [LvaController::class,'update']);
    Route::delete('lva/{id}', [LvaController::class,'delete']);
    Route::post('auth/logout', [AuthController::class,'logout']);
});

 */
