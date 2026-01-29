export interface LoginRequest {
    email: string;
    motDePasse: string;
}

export interface ApiResponse<T> {
  status: string;
  message: string;
  data: T;
}

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
}