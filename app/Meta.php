<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Meta extends Model
{
    protected $table = "metas";
    protected $primaryKey = "id";
    protected $fillable = [
        'meta_title', 'meta_description','meta_robots','canonical','meta_json','page_url'
    ];

    public function metaable(){
    	return $this->morphTo();
    }
}
