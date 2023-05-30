<?php

use flight\Flight;

require_once 'api/enterprise.php';

Flight::map('notFound', function(){
  echo "404 - Not Found";
});