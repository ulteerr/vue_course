<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('bookables', [\App\Http\Controllers\Api\BookableController::class, 'index']);
// Route::get('bookables/{id}', [\App\Http\Controllers\Api\BookableController::class, 'show']);

Route::apiResource('bookables', "\App\Http\Controllers\Api\BookableController")->only('index', 'show');

Route::get('bookables/{bookable}/availability', '\App\Http\Controllers\Api\BookableAvailabilityController')
    ->name('bookables.availability.show');

Route::get('bookables/{bookable}/reviews', '\App\Http\Controllers\Api\BookableReviewController')
    ->name('bookables.reviews.index');
