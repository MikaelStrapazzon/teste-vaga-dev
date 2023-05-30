<?php

use App\Http\Controller\Api\Enterprise;
use flight\Flight;

$Enterprise = new Enterprise();

Flight::route('GET /enterprise', [$Enterprise, 'listAll']);

Flight::route('POST /enterprise', [$Enterprise, 'create']);