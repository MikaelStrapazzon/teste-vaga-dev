<?php

namespace App\Services\Enterprise;

use App\Models\Enterprise;

class EnterpriseCrud
{
  public static function findAll(): array
  {
    $enterprises = Enterprise::all();

    $enterprisesReturn = [];
    foreach ($enterprises as $enterprise)
      $enterprisesReturn[] = [
          'cnpj' => $enterprise->getAttribute('cnpj'),
          'name' => $enterprise->getAttribute('name')
      ];

    return $enterprisesReturn;
  }
}