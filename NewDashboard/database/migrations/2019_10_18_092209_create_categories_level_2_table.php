<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriesLevel2Table extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories_level_2', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('category_name')->unique();
            $table->unsignedBigInteger('categoryLvl1')->index();
            $table->timestamps();
            $table->foreign('categoryLvl1')->references('id')->on('categories_level_1')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories_level_2');
    }
}
