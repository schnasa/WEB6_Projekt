<?php

namespace App\Http\Controllers;

use App\Models\Nachhilfegeber;
use Illuminate\Http\Request;

class NachhilfegeberController extends Controller
{

    public function index(){
        $nachhilfegeber = Nachhilfegeber::all();
        return view('nachhilfegeber.index', compact('nachhilfegeber'));
    }

    public function show(Nachhilfegeber $nachhilfe){
        return view('nachhilfegeber.show', compact('nachhilfe'));
    }

}
