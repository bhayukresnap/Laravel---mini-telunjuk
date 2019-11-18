<?php

namespace App;
use App\Transformers\ImageTransformer;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $table = "images";
    protected $primaryKey = "id";
    protected $fillable = [
        'path', 'alt',
    ];

    public function imageable(){
    	return $this->morphTo();
    }
}
