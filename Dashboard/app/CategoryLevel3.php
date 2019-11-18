<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cesargb\Database\Support\CascadeDelete;
class CategoryLevel3 extends Model
{
    protected $table = "categories_level_3";
    protected $primaryKey = "id";
    protected $fillable = [
        'category_name', 'categoryLvl2'
    ];
    use CascadeDelete;
    protected $cascadeDeleteMorph = ['meta'];
    public function meta(){
    	return $this->morphOne('App\Meta', 'metaable');
    }

    public function belongslevel2(){
    	return $this->belongsTo('App\CategoryLevel2');
    }

}
