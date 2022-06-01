<?php

namespace Database\Seeders;

use App\Models\Lva;
use App\Models\Termin;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use DateTime;
use Ramsey\Uuid\Type\Time;

class TerminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $termin = new Termin();
        $termin -> date = new DateTime();

        $termin->lva()->associate(Lva::find(2));
        $termin -> save();
    }
}
