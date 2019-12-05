<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cesargb\Database\Support\CascadeDelete;
class Product extends Model
{
    use CascadeDelete;
    protected $table = "products";
    protected $primaryKey = "id";
    protected $fillable = [
        'categoryId','brandId','product_name','product_description','product_specification'
    ];
    
    protected $cascadeDeleteMorph = ['meta','tags','thumbnail'];

    public function meta(){
    	return $this->morphOne('App\Meta', 'metaable');
    }

    public function stores(){
    	return $this->belongsToMany(Store::class, 'store_products')->withPivot('original_price', 'current_price', 'url_destination');
    }

    public function thumbnail(){
        return $this->morphMany('App\Thumbnail', 'imageable');
    }

    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }

    public function brand(){
        return $this->belongsTo('App\Brand','brandId','id');
    }
}
