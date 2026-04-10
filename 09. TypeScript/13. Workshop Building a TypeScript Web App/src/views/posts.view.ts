import type { Post } from "../interfaces/post.interface";
import { postsService } from "../services/services";

import { render } from "../utils/html";

export async function renderPostsView(): Promise<void> {
  try {
    const posts = await postsService.getAll();

    const template = `
  <ul>
  ${posts.map((post) => generateSinglePostHtml(post)).join("")}
  </ul>`;

    render(template);
  } catch (error) {
    if (error instanceof Error) {
      render("<h3>Cannot load posts!</h3>");
    }
  }
}

function generateSinglePostHtml(post: Post): string {
  return `
    <li>
     <h3>${post.title}</h3>
     <p>${post.body}</p>
    </li>
    `;
}
