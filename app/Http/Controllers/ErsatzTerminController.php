<?php

namespace App\Http\Controllers;

use App\Models\ErsatzTermin;
use App\Models\Termin;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ErsatzTerminController extends Controller
{

    public function show(ErsatzTermin $ersatztermin){
        return view('ersatztermine.show', compact('ersatztermin'));
    }

    public function save(Request $request): JsonResponse{
        DB::beginTransaction();
        try {
            $ersatztermin = ErsatzTermin::create($request->all());
            $ersatztermin->save();
            DB::commit();
            return response()->json($ersatztermin, 200);
        } catch (Exception $e) {
            DB::rollback();
            return response()->json('saving message failed ' . $e->getMessage(), 420);
        }
    }

    public function ersatztermins(){
        $ersatztermins = ErsatzTermin::with(['date', 'status', 'suchender_id', 'nachhilfegeber_id'])->get();
        return $ersatztermins;
    }

}
