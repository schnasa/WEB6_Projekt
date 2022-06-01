<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Nachhilfegeber extends Authenticatable implements JWTSubject
{
    use HasFactory;

    protected $fillable = ['firstName', 'lastName', 'education', 'email', 'password'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function lvas():HasMany{
        return $this->hasMany(Lva::class);
    }

    public function ersatzTermins():HasMany{
        return $this->hasMany(ErsatzTermin::class);
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return['nachhilfegeber' => ['id' => $this->id,
            'firstName' => $this->firstName,
            'lastName' => $this->lastName,
            'education' => $this->education,
            'email' => $this->email,
            'isAdmin' => true
            ]
        ];
    }

}
