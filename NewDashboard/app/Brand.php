<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    protected $table = "brands";
    protected $primaryKey = "id";
    protected $fillable = [
        'brandName',
    ];

    public function meta(){
    	return $this->morphOne('App\Meta', 'metaable');
    }
}
