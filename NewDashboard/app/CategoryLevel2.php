<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CategoryLevel2 extends Model
{
    protected $table = "categories_level_2";
    protected $primaryKey = "id";
    protected $fillable = [
        'category_name', 'categoryLvl1'
    ];

    public function meta(){
    	return $this->morphOne('App\Meta', 'metaable');
    }

    public function belongslevel1(){
    	return $this->belongsTo('App\CategoryLevel1','categoryLvl1','id');
    }

    public function manylevel3(){
    	return $this->hasMany('App\CategoryLevel3','categoryLvl2');
    }

}
