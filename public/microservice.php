<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Silex\Application as Microservice;
use Httpful\Request as HttpClient;

require_once __DIR__ . '/../vendor/autoload.php';

$config = parse_ini_file(__DIR__ . '/../config.ini');
$uri = sprintf('https://%s:%s@%s/admin/products.json', $config['api']['key'], $config['api']['password'], $config['name']);

$app = new Microservice();

$app->get('/products', function() use($app, $uri) {
    $response = HttpClient::get($uri)
        ->expectsJson()
        ->send();

    return new Response($response->raw_body, $response->code);
});

$app->post('/products', function(Request $request) use($app, $uri) {
    $response = HttpClient::post($uri)
        ->sendsJson()
        ->body($request->getContent())
        ->send();

    return new Response($response->raw_body, $response->code);
});

$app->run();

