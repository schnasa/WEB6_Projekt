<?php

namespace App\Http\Controllers;
use App\Models\Nachhilfegeber;
use App\Models\Suchender;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
class AuthController extends Controller
{


    public function __construct(){
        $this->user = new Nachhilfegeber;
        $this->suchender = new Suchender;
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function getAuthenticatedUser() {
        return response()->json(auth()->user());
    }

    public function login() {
        //dd("Test");
        $credentials = \request(['email', 'password']);
        if(! $token = \auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->responseWithToken($token);
    }

    public function logout() {
        auth()->logout();
        return response()->json(['message' => 'logged out!']);
    }

    public function refresh() {
        return $this->responseWithToken(auth()->refresh());
    }

    protected function responseWithToken(string $token) {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
