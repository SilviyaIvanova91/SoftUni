import { deleteById, detailsAlbumById } from "../api/data.js";

export async function showDelete(ctx) {
  const id = ctx.params.id;

  const choise = confirm(`Are you sure you want to delete this album?`);
  if (choise) {
    await deleteById(id);
    ctx.page.redirect("/catalog");
  }
}
