<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cesargb\Database\Support\CascadeDelete;
class Store extends Model
{
    use CascadeDelete;
    protected $table = "stores";
    protected $primaryKey = "id";
    protected $fillable = [
        'store_name'
    ];
    protected $cascadeDeleteMorph = ['meta','thumbnail'];
    public function meta(){
    	return $this->morphOne('App\Meta', 'metaable');
    }
    public function thumbnail(){
        return $this->morphOne('App\Image', 'imageable');
    }
}
