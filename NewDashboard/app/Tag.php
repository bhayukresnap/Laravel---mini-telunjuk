<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $table = "tags";
    protected $primaryKey = "id";
    protected $fillable = [
        'tagname',
    ];

    public function meta(){
    	return $this->morphOne('App\Meta', 'metaable');
    }

}
