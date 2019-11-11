<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMetasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('metas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('meta_title')->nullable();
            $table->longText('meta_description')->nullable();
            $table->longText('meta_keyword')->nullable();
            $table->string('noindex')->default('false');
            $table->string('canonical')->nullable();
            $table->string('json_ld')->nullable();
            $table->string('path_url')->unique();
            $table->longText('body_html')->nullable();
            $table->integer('metaable_id')->unsigned()->index();
            $table->string('metaable_type');
            $table->timestamps();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('metas');
    }
}
