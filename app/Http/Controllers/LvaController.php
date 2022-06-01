<?php

namespace App\Http\Controllers;

use App\Models\Termin;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Database\Eloquent;
use Illuminate\Support\Facades\DB;
use App\Models\Lva;
use App\Models\Nachhilfegeber;


class LvaController extends Controller
{

    //neue LVA
    public function save(Request $request) : JsonResponse{
        //$request = $this->parseRequest($request);

        DB::beginTransaction();

        try{
            $request["nachhilfegeber_id"] = $request["nachhilfegeber"]["id"];
            $lva = Lva::create($request->all());
            if(isset($request['nachhilfegebers']) && is_array($request['nachhilfegebers'])){
                foreach ($request['nachhilfegebers'] as $n){
                    $nachhilfegeber =
                        Nachhilfegeber::firstOrNew([
                            'firstName'=>$n['firstName'],
                            'lastName'=>$n['lastname'],
                            'education'=>$n['education'],
                            'mail'=>$n['mail'],
                            'password'=>$n['password']]);
                    $lva->nachhilfegeber()->save($nachhilfegeber);
                }
            }
            if(isset($request['termins']) && is_array($request['termins'])){
                foreach ($request['termins'] as $t) {
                    $termin = Termin::firstOrNew([
                        'date'=>$t['date'],
                        'lva_id'=>$lva->id
                    ]);
                    $termin->save();
                }
            }
            DB::commit();
            return response()->json($lva, 201);
        }
        catch (\Exeption $e){
            DB::rollBack();
            return response()->json("saving lva faild: " . $e->getMessage(), 402);
        }
    }

    public function delete(string $id) : JsonResponse{
        $lva = Lva::where('id', $id)->first();
        if($lva !=null){
            $lva->delete();
        }
        else
            throw new \Exception("Angebot kann nicht gelöscht werden - es exisitiert nicht");
        return response()->json('Angebot(' .$id. ') erfolgreich gelöscht', 200);
    }

    public function update(Request $request, string $id) : JsonResponse{
        DB::beginTransaction();
        try {
            $lva = Lva::with(['nachhilfegeber', 'termins'])
                ->where('id', $id)->first();
            if ($lva != null) {
                //$request = $this->parseRequest($request);
                $lva->update($request->all());

                if(isset($request['termins']) && is_array($request['termins'])){
                    foreach ($request['termins'] as $t) {
                        $termin = Termin::firstOrNew([
                            'date'=>$t['date'],
                            'lva_id'=>$lva->id
                        ]);
                        $termin->save();
                    }
                }
            }
            DB::commit();
            $l = Lva::with(['nachhilfegeber', 'termins'])
                ->where('id', $id)->first();
            // return a vaild http response
            return response()->json($l, 201);
        } catch (\Exception $e) {
            // rollback all queries
            DB::rollBack();
            return response()->json("updating course failed: " . $e->getMessage(), 420);
        }
    }

    public function index(){
        $lvas = Lva::with(['nachhilfegeber', 'termins'])->get();
        return $lvas;
    }

    public function show(Lva $lva){
        return view('lvas.show', compact('lva'));
    }



    public function findByID(string $id): Lva
            {
                $lva = Lva::where('id', $id)
                    ->with(['nachhilfegeber', 'termins'])
                    ->first();
                return $lva;
            }

}
