<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $table = "blogs";
    protected $primaryKey = "id";
    protected $fillable = [
        'title','body','featuredImage','published_at'
    ];

    public function meta(){
    	return $this->morphOne('App\Meta', 'metaable');
    }
}
