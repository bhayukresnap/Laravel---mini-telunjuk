<?php
namespace App\Traits;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;

trait ApiResponser{
	protected function successResponse($data, $code){
		return response()->json(["success"=> [$data], 'code'=>$code]);
	}

	protected function errorResponse($message,$code){
		return response()->json(['error'=>$message, 'code'=>$code]);

	}

	private function APISuccess($data,$code){
		return response()->json($data, $code);
	}

	protected function showAll(Collection $collection, $code = 200){
		if ($collection->isEmpty()) {
			return $this->APISuccess(['data' => $collection], $code);
		}

		return $this->APISuccess($collection, $code);
	}

	protected function showOne(Model $instance, $code = 200){
		return $this->APISuccess($instance, $code);
	}
}