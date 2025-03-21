<?php

use Illuminate\Http\Request;
use Illuminate\Routing\Middleware\ThrottleRequests;
use Illuminate\Support\Facades\Route;
use William\QuotesApi\Http\Controllers\QuoteController;

Route::get('quotes-api/all', [QuoteController::class, 'getAllQuotes']); 

Route::get('quotes-api/random', [QuoteController::class, 'getRandomQuote']);

Route::get('quotes-api/{id}', [QuoteController::class, 'getQuote']);
