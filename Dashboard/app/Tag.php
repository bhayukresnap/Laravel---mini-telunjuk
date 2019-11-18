<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cesargb\Database\Support\CascadeDelete;
class Tag extends Model
{
    use CascadeDelete;
    protected $table = "tags";
    protected $primaryKey = "id";
    protected $fillable = [
        'tagname',
    ];
    protected $cascadeDeleteMorph = ['meta'];
    public function meta(){
    	return $this->morphOne('App\Meta', 'metaable');
    }

    public function blogs()
    {
        return $this->morphedByMany(Blog::class, 'taggable');
    }

    public function products()
    {
        return $this->morphedByMany(Product::class, 'taggable');
    }
}
