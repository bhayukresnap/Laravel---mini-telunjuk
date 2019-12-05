<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cesargb\Database\Support\CascadeDelete;
class Brand extends Model
{
	use CascadeDelete;
    protected $table = "brands";
    protected $primaryKey = "id";
    protected $fillable = [
        'brandName',
    ];
    protected $cascadeDeleteMorph = ['meta','thumbnail'];
    public function meta(){
    	return $this->morphOne('App\Meta', 'metaable');
    }
    public function thumbnail(){
        return $this->morphOne('App\Thumbnail', 'imageable');
    }

    public function products(){
        return $this->hasMany('App\Product', 'brandId');
    }

}
