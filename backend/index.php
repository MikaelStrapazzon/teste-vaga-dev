<?php
require_once 'flight/Flight.php';
require_once 'flight/autoload.php';

use flight\Flight;

require_once 'routes/main.php';

Flight::start();
