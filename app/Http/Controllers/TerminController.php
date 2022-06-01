<?php

namespace App\Http\Controllers;

use App\Models\Termin;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Exception;

class TerminController extends Controller
{

    public function show(Termin $termin){
        return view('termine.show', compact('termin'));
    }

    public function update(Request $request, int $id): JsonResponse
    {
        DB::beginTransaction();
        try {
            $termin = Termin::where('id', $id)->first();
            if ($termin != null) {
                $termin->update($request->all());
                $termin->save();
            }
            DB::commit();
            $date1 = Termin::where('id', $id)->first();
            // return a vaild http response
            return response()->json($date1, 201);
        } catch (Exception $e) {
            // rollback all queries
            DB::rollBack();
            return response()->json("updating offer failed: " . $e->getMessage(), 420);
        }
    }

}
