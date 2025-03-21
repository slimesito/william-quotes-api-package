# Quotes API Package

## Introduction
This Laravel package provides a simple API for retrieving quotes, featuring rate limiting, caching, and a Vue.js-based UI for an enhanced user experience.

## Installation
To install this package within your Laravel 10 project, follow these steps:

1. Navigate to your Laravel project root and run:
   ```bash
   composer require william/quotesapi
```

2. After installation, publish the package assets (Vue.js UI, config files, etc.):
    ```bash
    php artisan vendor:publish --tag=quotesapi-config
```

## Configuration

The package provides configuration options for API rate limiting and caching. You can modify these settings in `config/quotesapi.php` after publishing the config file.

## Usage

### API Routes

This package provides the following API routes:

- `GET /api/quotes` - Retrieve all quotes with pagination.
- `GET /api/quotes/random` - Retrieve a random quote.
- `GET /api/quotes/{id}` - Retrieve a specific quote by ID.

### Web UI

The Vue.js UI is accessible via:

```
/quotes-ui
```

If you want to serve the UI from a different path, update the web route in `routes/web.php`.

## Rate Limiting

To prevent abuse, API requests are rate-limited. By default, the limit is **60 requests per minute** per user. You can configure this in the `config/quotesapi.php` file:

```php
return [
    'rate_limit' => [
        'max_requests' => 60,
        'decay_minutes' => 1,
    ],
];
```

## Caching

To improve performance, responses are cached using Laravel's caching system. You can configure the cache duration in `config/quotesapi.php`:

```php
return [
    'cache_duration' => 600, // Cache for 10 minutes
];
```

## Building & Publishing the Vue.js UI

Navigate to the frontend directory and install dependencies:

```bash
cd packages/william/quotesapi/frontend
npm install
```

To build the UI for production:

```bash
npm run build
```

To serve the UI in development mode:

```bash
npm run dev
```

After building, the assets are stored in `public/vendor/quotesapi`. Ensure they are correctly loaded by running:

```bash
php artisan vendor:publish --tag=quotesapi-assets
```

## Testing

Run the package tests with:

```bash
php artisan test --testsuite=package-quotesapi
```

## Contributing

Feel free to submit issues or pull requests to improve the package!

## License

This package is open-source and available under the MIT license.

