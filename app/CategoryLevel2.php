<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cesargb\Database\Support\CascadeDelete;
class CategoryLevel2 extends Model
{
    use CascadeDelete;
    protected $table = "categories_level_2";
    protected $primaryKey = "id";
    protected $fillable = [
        'category_name', 'categoryLvl1'
    ];
    protected $cascadeDeleteMorph = ['meta','thumbnail'];
    public function meta(){
    	return $this->morphOne('App\Meta', 'metaable');
    }
    public function thumbnail(){
        return $this->morphOne('App\Thumbnail', 'imageable');
    }
    public function belongslevel1(){
    	return $this->belongsTo('App\CategoryLevel1','categoryLvl1','id');
    }

    public function manylevel3(){
    	return $this->hasMany('App\CategoryLevel3','categoryLvl2');
    }

}
