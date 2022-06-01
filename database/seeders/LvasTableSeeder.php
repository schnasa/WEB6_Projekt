<?php

namespace Database\Seeders;

use App\Models\Lva;
use App\Models\Nachhilfegeber;
use App\Models\Termin;
use DateTime;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class LvasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       $lva = new Lva;
       $lva -> name = "Mathe";
       $lva->level = "Matura";
       $lva->description = "Beschreibung";
       $lva->nachhilfegeber()->associate(Nachhilfegeber::find(1));
       $lva->save();

        //Termin hinzufügen
        $termin = new Termin;
        $termin->date = new DateTime();

        $termin2 = new Termin;
        $termin2->date = new DateTime();

        $lva->termins()->saveMany([$termin, $termin2]);
        $lva->save();

        $lva1 = new Lva;
        $lva1 ->name = "Mathe1";
        $lva1->level = "Matura";
        $lva1->description = "Beschreibung";
        $lva1->nachhilfegeber()->associate(Nachhilfegeber::find(1));
        $lva1->save();


        //Termin hinzufügen
        $termin3 = new Termin;
        $termin3->date = new DateTime();

        $termin4 = new Termin;
        $termin4->date = new DateTime();

        $lva1->termins()->saveMany([$termin3, $termin4]);
        $lva1->save();


    }
}
