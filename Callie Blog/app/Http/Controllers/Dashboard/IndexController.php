<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
class IndexController extends Controller
{
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

    public function logout(){
      Auth::logout();
      return back();
    }
}
