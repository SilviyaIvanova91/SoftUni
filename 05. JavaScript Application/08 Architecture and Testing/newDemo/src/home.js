const section = document.getElementById("home-view");
section.remove();

export function showHomeView(ctx) {
  ctx.render(section);
}
