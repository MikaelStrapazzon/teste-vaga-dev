<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @mixin Builder
 */
class State extends Model
{
  protected int $id;
  protected string $Acronym;

  public function city(): HasMany
  {
    return $this->hasMany(City::class);
  }
}