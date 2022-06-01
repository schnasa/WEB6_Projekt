<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //User::factory(10)->create();
        $this->call(NachhilfegebersTableSeeder::class);
        $this->call(LvasTableSeeder::class);
        $this->call(SuchendersTableSeeder::class);
        $this->call(TerminsTableSeeder::class);
        $this->call(ErsatzTerminsTableSeeder::class);
    }
}
