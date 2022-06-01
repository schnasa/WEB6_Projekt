<?php

namespace Database\Seeders;

use App\Models\ErsatzTermin;
use App\Models\Nachhilfegeber;
use App\Models\Suchender;
use DateTime;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Ramsey\Uuid\Type\Time;

class ErsatzTerminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ersatzTermin = new ErsatzTermin();
        $ersatzTermin -> date = new DateTime();
        $ersatzTermin->suchender()->associate(Suchender::find(1));
        $ersatzTermin->nachhilfegeber()->associate(Nachhilfegeber::find(1));
        $ersatzTermin->save();
    }
}
