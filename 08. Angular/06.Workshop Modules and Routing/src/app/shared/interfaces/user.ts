export interface User {
  _id: string;
  username: string;
  email: string;
  tel?: string;
}

export interface UserWithCredentials extends User {
  password: string;
}
