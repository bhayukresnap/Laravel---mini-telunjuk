<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use App\Image;
use Illuminate\Support\Facades\Auth;
use Artisan;
class HomeController extends Controller
{
    //
    public function __construct(){
    	$this->middleware('auth');
    }

    public function index()
    {
        // $client = new Client;
        // $request = $client->get('http://localhost/api/users');
        // $response = $request->getBody();
        return view('dashboard.index');
    }
    
    public function clearCache(){
        $exitCode = Artisan::call('config:clear');
       $exitCode = Artisan::call('cache:clear');
       $exitCode = Artisan::call('config:cache');
       $exitCode = Artisan::call('route:cache');
       return back();
    }
    public function logout(){
      Auth::logout();
      return back();
    }
}
