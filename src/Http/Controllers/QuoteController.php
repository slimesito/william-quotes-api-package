<?php

namespace William\QuotesApi\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use William\QuotesApi\Services\QuotesApiService;

class QuoteController extends Controller
{
    protected QuotesApiService $service;

    public function __construct(QuotesApiService $service)
    {
        $this->service = $service;
    }

    public function getAllQuotes()
    {
        return response()->json($this->service->getAllQuotes());
    }

    public function getRandomQuote()
    {
        return response()->json($this->service->getRandomQuote());
    }

    public function getQuote(int $id)
    {
        $quote = $this->service->getQuote($id);

        if (!$quote) {
            return response()->json(['error' => 'Quote not found'], 404);
        }

        return response()->json($quote);
    }
}
