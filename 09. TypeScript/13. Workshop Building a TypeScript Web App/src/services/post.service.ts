import { BASE_URL } from "../constants";
import type { CreatePost, Post } from "../interfaces/post.interface";
import { APIService } from "./api";

export class PostsService extends APIService<Post, CreatePost> {
  constructor() {
    super(`${BASE_URL}/posts`);
  }
}
