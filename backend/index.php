<?php

use flight\Flight;

require 'flight/Flight.php';

Flight::route('/', function () {
    echo 'hello world!';
});

Flight::start();
