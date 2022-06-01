<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Lva extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'level', 'description', 'nachhilfegeber_id'];

    public function termins():HasMany{
        return $this->hasMany(Termin::class);
    }

    public function nachhilfegeber():BelongsTo{
        return $this->belongsTo(Nachhilfegeber::class);
    }




}
