<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('bookables', [\App\Http\Controllers\Api\BookableController::class, 'index']);
Route::get('bookables/{id}', [\App\Http\Controllers\Api\BookableController::class, 'show']);