<?php

namespace Database\Seeders;

use App\Models\Nachhilfegeber;
use App\Models\Suchender;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class SuchendersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $suchender = new Suchender();
        $suchender -> firstName = "Lisa";
        $suchender -> lastName = "Moser";
        $suchender -> email = "test.lisa@gmail.com";
        $suchender -> password = bcrypt("passwort3");
        $suchender -> save();
    }
}
