<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateErsatzTerminsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ersatz_termins', function (Blueprint $table) {
            $table->id();


            $table->date('date');
            $table->string('status')->nullable();
            $table->foreignId('suchender_id')
                ->constrained()
                ->onDelete('cascade');
            $table->foreignId('nachhilfegeber_id')
                ->constrained()
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ersatz_termins');
    }
}
