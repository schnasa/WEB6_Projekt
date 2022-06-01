<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Termin extends Model
{
    use HasFactory;

    protected $fillable = ['date', 'lva_id','suchender_id', 'status'];

    public function lva(): BelongsTo{
        return $this->belongsTo(Lva::class);
    }

    public function suchenders():HasOne{
        return $this->hasOne(Suchender::class);
    }

}
