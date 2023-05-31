<?php

use flight\Flight;

require_once 'api/enterprise.php';
require_once 'api/state.php';
require_once 'api/city.php';

Flight::map('notFound', function(){
  echo "404 - Not Found";
});