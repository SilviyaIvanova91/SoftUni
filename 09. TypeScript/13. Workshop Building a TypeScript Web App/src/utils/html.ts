export function render(template: string) {
  const mainEl = document.querySelector("main");

  if (mainEl) {
    mainEl.innerHTML = template;
  }
}
