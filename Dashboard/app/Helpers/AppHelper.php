<?php
class AppHelper{
	public function moneyCurrency($price){
	    return number_format($price,0,',','.');    
	}
	
	public function startTime($time){
		return \Carbon\Carbon::parse($time)->format('d M');
	}	

	public function endTime($time){
		return \Carbon\Carbon::parse($time)->format('d M Y');
	}

	public function blogTime($time){
		return \Carbon\Carbon::parse($time)->format('F d, Y');
	}

	public function getPublishedTime($time){
        // return \Carbon\Carbon::parse($time)->format('d, M Y H:i');
        return \Carbon\Carbon::parse($time)->diffForHumans();
    }

	public static function instance()
    {
         return new AppHelper();
    }
}