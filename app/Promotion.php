<?php

namespace App;
use Cesargb\Database\Support\CascadeDelete;
use Illuminate\Database\Eloquent\Model;

class Promotion extends Model
{
    use CascadeDelete;
    protected $table = "promotions";
    protected $primaryKey = "id";
    protected $fillable = [
        'title','started_at','ended_at','link','store_id'
    ];
    protected $cascadeDeleteMorph = ['meta','thumbnail'];
    public function meta(){
    	return $this->morphOne('App\Meta', 'metaable');
    }
    public function thumbnail(){
        return $this->morphOne('App\Thumbnail', 'imageable');
    }
    public function belongStore(){
        return $this->belongsTo('App\Store', 'store_id', 'id');
    }
}
