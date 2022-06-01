<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Suchender extends Authenticatable implements JWTSubject
{
    use HasFactory;

    protected $fillable = ['firstName', 'lastName', 'mail', 'password'];

    public function termins():HasMany{
        return $this->hasMany(Termin::class);
    }

    public function ersatzTermins():HasMany{
        return $this->hasMany(ErsatzTermin::class);
    }

    public function getJWTIdentifier(){
        return $this->getKey();
    }

    public function getJWTCustomClaims(){
        return['suchender' => ['id' => $this->id,
            'firstName' => $this->firstName,
            'lastName' => $this->lastName,
            'email' => $this->email,
            'isAdmin' => false
            ]
        ];
    }

}
