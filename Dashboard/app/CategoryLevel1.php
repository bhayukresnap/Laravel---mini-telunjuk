<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cesargb\Database\Support\CascadeDelete;
class CategoryLevel1 extends Model
{
    use CascadeDelete;
    protected $table = "categories_level_1";
    protected $primaryKey = "id";
    protected $fillable = [
        'category_name',
    ];
    protected $cascadeDeleteMorph = ['meta'];
    public function meta(){
    	return $this->morphOne('App\Meta', 'metaable');
    }

    public function manylevel2(){
    	return $this->hasMany('App\CategoryLevel2','categoryLvl1');
    }

}
