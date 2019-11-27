<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStoreProductTable extends Migration
{

    // public function up()
    // {
    //     Schema::create('store_product', function (Blueprint $table) {
    //         $table->unsignedBigInteger('store_id')->index();
    //         $table->unsignedBigInteger('product_id')->index();
    //         $table->foreign('store_id')->references('id')->on('stores')->onDelete('cascade');
    //         $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
    //     });
    // }

    // public function down()
    // {
    //     Schema::dropIfExists('store_product');
    // }
}
