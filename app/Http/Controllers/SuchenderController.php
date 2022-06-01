<?php

namespace App\Http\Controllers;

use App\Models\Suchender;
use Illuminate\Http\Request;

class SuchenderController extends Controller
{
    public function __construct(){
        $this->middleware('auth:suchender');
    }

    public function index(){
        $suchende = Suchender::all();
        return view('suchende.index', compact('suchende'));
    }

    public function show(Suchender $suchender){
        return view('suchende.show', compact('suchender'));
    }

}
