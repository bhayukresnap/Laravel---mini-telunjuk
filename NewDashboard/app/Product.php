<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = "products";
    protected $primaryKey = "id";
    protected $fillable = [
        'categoryId','brandId','product_name','product_description','product_specification'
    ];
    
}
