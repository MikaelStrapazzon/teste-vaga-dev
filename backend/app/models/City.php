<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @mixin Builder
 */
class City extends Model
{
  public int $id;
  public string $name;

  public function enterprise(): HasMany
  {
    return $this->hasMany(Enterprise::class);
  }

  public function state(): BelongsTo
  {
    return $this->belongsTo(State::class);
  }
}