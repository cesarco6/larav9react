<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PresentController extends Controller
{
    public function index()
    {
        return view('welcome');
    }
}
