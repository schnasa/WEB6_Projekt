<?php

namespace Database\Seeders;


use App\Models\Nachhilfegeber;
use DateTime;
use Illuminate\Database\Seeder;


class NachhilfegebersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $nachhilfegeber = new Nachhilfegeber();
        $nachhilfegeber -> firstName = "Lisa";
        $nachhilfegeber -> lastName = "Moser";
        $nachhilfegeber -> education = "BA";
        $nachhilfegeber -> email = "m.lisa@gmail.com";
        $nachhilfegeber -> password = bcrypt('passwort');
        $nachhilfegeber -> save();

        $nachhilfegeber1 = new Nachhilfegeber();
        $nachhilfegeber1 -> firstName = "Lisa";
        $nachhilfegeber1 -> lastName = "Moser";
        $nachhilfegeber1-> education = "BA";
        $nachhilfegeber1-> email = "TEST.lisa@gmail.com";
        $nachhilfegeber1 -> password = bcrypt('passwort1');
        $nachhilfegeber1-> save();

    }
}
