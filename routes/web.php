<?php

use App\Http\Controllers\ErsatzTerminController;
use App\Http\Controllers\LvaController;
use App\Http\Controllers\NachhilfegeberController;
use App\Http\Controllers\SuchenderController;
use App\Models\ErsatzTermin;
use App\Models\Lva;
use App\Models\Nachhilfegeber;
use App\Models\Suchender;
use App\Models\Termin;
use Illuminate\Support\Facades\Route;

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
//LVA
Route::get('/', [LvaController::class,'index']);
Route::get('/lvas', [LvaController::class,'index']);
Route::get('/lvas/{lva}', [LvaController::class,'show']);

//Nachhilfegeber
Route::get('/nachhilfegeber', [NachhilfegeberController::class, 'index']);
Route::get('/nachhilfegeber/{nachhilfe}', [NachhilfegeberController::class, 'show']);


//Suchender
Route::get('/suchende', [SuchenderController::class, 'index']);
Route::get('/suchende/{suchender}', [SuchenderController::class, 'show']);


//Termin
Route::get('/termin', [SuchenderController::class, 'show']);


//Ersatz Termin
Route::get('/ersatztermin', [ErsatzTerminController::class, 'show']);
