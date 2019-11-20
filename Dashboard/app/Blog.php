<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cesargb\Database\Support\CascadeDelete;
class Blog extends Model
{
    use CascadeDelete;
    protected $table = "blogs";
    protected $primaryKey = "id";
    protected $fillable = [
        'title','body','featuredImage','published_at'
    ];
    protected $cascadeDeleteMorph = ['meta','tags','image'];
    public function meta(){
    	return $this->morphOne('App\Meta', 'metaable');
    }

    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }

    public function image(){
        return $this->morphOne('App\Thumbnail', 'imageable');
    }
}
