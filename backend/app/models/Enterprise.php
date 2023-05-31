<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @mixin Builder
 */
class Enterprise extends Model
{
  public int $id;
  public string $name;
  public string $cnpj;
  public string $cep;
  public string $street;
  public int $number;
  public string $neighborhood;

  public function city(): BelongsTo
  {
    return $this->belongsTo(City::class);
  }
}