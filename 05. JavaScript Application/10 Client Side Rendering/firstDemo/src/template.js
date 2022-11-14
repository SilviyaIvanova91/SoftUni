const placeholderPattern = /%%(.+?)%%/g; //хвани всеки символ между %%  (.+) s naj-kysiq ma` (?)

const templates = {};

export async function render(templateName, ctx) {
  const html = await loadTemplate(templateName);
  const result = html.replace(placeholderPattern, replacer);
  /*
    let result = html.replace("%%username%%", ctx.username);
    result = result.replace(
      "%%items%%",
      ctx.items.map((i) => `<li>${i}</li>`).join("\n")
    );
     */

  return result;

  function replacer(match, name) {
    const value = ctx[name];
    if (value != undefined) {
      return escapeHtml(value);
    } else {
      return match;
    }
  }
}

async function loadTemplate(name) {
  if (templates[name] == undefined) {
    const response = await fetch(`./views/${name}.html`);
    templates[name] = await response.text();
  }

  return templates[name];
}

function escapeHtml(html) {
  return html
    .toString()
    .replaceAll("<", "&lt")
    .replaceAll(">", "&gt")
    .replaceAll("&", "&amp");
}
