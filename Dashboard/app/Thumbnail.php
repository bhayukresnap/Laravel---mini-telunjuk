<?php

namespace App;
use App\Transformers\ImageTransformer;
use Illuminate\Database\Eloquent\Model;

class Thumbnail extends Model
{
    protected $table = "thumbnails";
    protected $primaryKey = "id";
    protected $fillable = [
        'original', 'alt',
    ];

    public function imageable(){
    	return $this->morphTo();
    }
}
