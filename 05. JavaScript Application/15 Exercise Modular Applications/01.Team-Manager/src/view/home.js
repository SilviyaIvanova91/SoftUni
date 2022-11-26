import { html } from "../../node_modules/lit-html/lit-html.js";

export async function homeView(ctx) {
  const userData = JSON.parse(sessionStorage.getItem("userData"));

  ctx.render(createHomeTemplate(!!userData));
}

function createHomeTemplate(hasLogin) {
  return html`
    <section id="home">
      <article class="hero layout">
        <img src="./assets/team.png" class="left-col pad-med" />
        <div class="pad-med tm-hero-col">
          <h2>Welcome to Team Manager!</h2>
          <p>Want to organize your peers? Create and manage a team for free.</p>
          <p>
            Looking for a team to join? Browse our communities and find
            like-minded people!
          </p>

          ${hasLogin
            ? html`<a href="/browse" class="action cta">Browse Teams</a>`
            : html`<a href="/register" class="action cta">Sign Up Now</a>`}
        </div>
      </article>
    </section>
  `;
}
