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
        return $this->belongsToMany(Store::class, 'store_products')->withPivot('price_after', 'price_before', 'url_destination');
    }

    public function thumbnail(){
        return $this->morphMany('App\Thumbnail', 'imageable');
    }

    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }
    public function parentProduct(){
        return $this->belongsTo('App\CategoryLevel3','categoryId','id');
    }
    public function brand(){
        return $this->belongsTo('App\Brand','brandId','id');
    }

    public function lowestPrice($value){
        $price = collect($this->stores)->map(function($item){
            return ($item);
        })->sortBy('pivot.price_after')->first();

        $data = collect([
            'store'=> $price->store_name,
            'store_image'=>$price->thumbnail,
            'url'=> $price->pivot->url_destination,
            'PriceAfter'=>'Rp '.\AppHelper::instance()->moneyCurrency($price->pivot->price_after),
            'PriceBefore'=> $price->pivot->price_before ? 'Rp '.\AppHelper::instance()->moneyCurrency($price->pivot->price_before) : null
        ]);
        return $data->get($value);
    }
}
