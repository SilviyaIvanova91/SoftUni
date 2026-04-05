export interface User {
  _id: string;
  username: string;
  email: string;
  tel?: string;
  themes?: string[];
  posts?: string[];
  created_at?: string;
}

export interface UserForAuth {
  username: string;
  email: string;
  password: string;
  tel?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface ProfileUpdateData {
  username: string;
  email: string;
  tel?: string;
}
