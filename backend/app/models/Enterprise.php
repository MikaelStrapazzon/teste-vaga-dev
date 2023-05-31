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
  protected int $id;
  protected string $name;
  protected string $cnpj;
  protected string $cep;
  protected string $street;
  protected int $number;
  protected string $neighborhood;

  public function city(): BelongsTo
  {
    return $this->belongsTo(City::class);
  }
}