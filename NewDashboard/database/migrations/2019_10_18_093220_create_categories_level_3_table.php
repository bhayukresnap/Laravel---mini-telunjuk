<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriesLevel3Table extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories_level_3', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('category_name')->unique();
            $table->unsignedBigInteger('categoryLvl2')->index();
            $table->timestamps();
            $table->foreign('categoryLvl2')->references('id')->on('categories_level_2')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories_level_3');
    }
}
