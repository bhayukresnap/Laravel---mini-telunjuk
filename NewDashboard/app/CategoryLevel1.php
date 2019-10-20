<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CategoryLevel1 extends Model
{
    protected $table = "categories_level_1";
    protected $primaryKey = "id";
    protected $fillable = [
        'category_name',
    ];

    public function meta(){
    	return $this->morphOne('App\Meta', 'metaable');
    }
}
