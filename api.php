<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');



http_response_code(400);

echo json_encode([
    'email' => ['Please enter an email address'],
    'password' => ['Please enter a password']
]);

