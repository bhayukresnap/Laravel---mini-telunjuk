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
    protected $cascadeDeleteMorph = ['meta'];
    public function meta(){
    	return $this->morphOne('App\Meta', 'metaable');
    }
}
