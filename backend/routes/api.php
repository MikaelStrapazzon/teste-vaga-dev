<?php

use flight\Flight;

Flight::route('GET /enterprise', function(){
  echo 'List all enterprises';
});

Flight::route('POST /enterprise', function(){
  echo 'Create enterprise';
});

Flight::map('notFound', function(){
  echo "404 - Not Found";
});