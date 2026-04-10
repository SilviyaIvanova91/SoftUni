import { BASE_URL } from "../constants";
import type { CreateUser, User } from "../interfaces/user.interface";
import { APIService } from "./api";

export class UserService extends APIService<User, CreateUser> {
  constructor() {
    super(`${BASE_URL}/users`);
  }
}
