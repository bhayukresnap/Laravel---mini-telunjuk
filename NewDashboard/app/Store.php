<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    protected $table = "stores";
    protected $primaryKey = "id";
    protected $fillable = [
        'store_name','store_logo'
    ];

    public function meta(){
    	return $this->morphOne('App\Meta', 'metaable');
    }
}
