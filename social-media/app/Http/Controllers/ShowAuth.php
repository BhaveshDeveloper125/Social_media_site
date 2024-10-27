<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ShowAuth extends Controller
{
    function Show_auth()
    {
        return Auth::user();
    }
}
