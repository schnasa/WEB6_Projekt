<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ErsatzTermin extends Model
{
    use HasFactory;

    protected $fillable = ['date', 'status', 'suchender_id', 'nachhilfegeber_id'];

    public function suchender(): BelongsTo{
        return $this->belongsTo(Suchender::class);
    }

    public function nachhilfegeber(): BelongsTo{
        return $this->belongsTo(Nachhilfegeber::class);
    }

}
