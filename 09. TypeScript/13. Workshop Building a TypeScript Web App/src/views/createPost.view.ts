import { postsService } from "../services/services";
import { render } from "../utils/html";

export async function renderCreatePostView() {
  const template = `
<form id="create-post-form">
  <label for="title">Title</label>
  <input type="text" id="title" name="title" />

  <label for="body">Body</label>
  <input type="text" id="body" name="body" />

  <button type="submit">Create Post</button>
</form>
`;

  render(template);

  const formEl = document.getElementById("create-post-form");

  if (formEl) {
    formEl.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(e.target as HTMLFormElement);
      const title = formData.get("title") as string;
      const body = formData.get("body") as string;

      const result = await postsService.create({
        title,
        body,
        userId: 1,
      });

      console.log(result);
    });
  }
}
