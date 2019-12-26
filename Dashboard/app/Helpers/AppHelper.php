<?php
class AppHelper{
	public function moneyCurrency($price){
	    return number_format($price,0,',','.');    
	}
	
	public static function instance()
    {
         return new AppHelper();
    }
}