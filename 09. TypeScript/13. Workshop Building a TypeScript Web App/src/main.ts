import type { Routes } from "./interfaces/routes.interface";
import { Router } from "./router";
import "./style.css";
import { renderCreatePostView } from "./views/createPost.view";
import { renderPostsView } from "./views/posts.view";
import { renderUsersView } from "./views/users.view";

const routes: Routes = {
  "/posts": renderPostsView,
  "/users": renderUsersView,
  "/posts/create": renderCreatePostView,
};

const router = new Router(routes);

function setupNavLinks() {
  const linkEls = document.querySelectorAll("nav a");

  linkEls.forEach((linkEl) => {
    linkEl.addEventListener("click", (e) => {
      e.preventDefault();
      router.navigate((e.target as HTMLAnchorElement).pathname);
    });
  });
  // const postLinkEl = document.getElementById("posts-link");
  // const createPostLinkEl = document.getElementById("create-post-link");
  // const usersLinkEl = document.getElementById("users-link");
  // if (postLinkEl) {
  //   postLinkEl.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     router.navigate("/posts");
  //   });
  // }
  // if (createPostLinkEl) {
  //   createPostLinkEl.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     router.navigate("/posts/create");
  //   });
  // }
  // if (usersLinkEl) {
  //   usersLinkEl.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     router.navigate("/users");
  //   });
  //}
}

setupNavLinks();
