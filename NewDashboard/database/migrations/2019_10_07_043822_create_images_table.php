<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImagesTable extends Migration
{
    public function up()
    {
        Schema::create('images', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('featuredImage');
            $table->string('alt')->nullable();
            $table->integer('imageable_id')->unsigned()->index();
            $table->string('imageable_type');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('images');
    }
}
