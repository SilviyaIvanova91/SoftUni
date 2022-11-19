import { html } from '../../node_modules/lit-html/lit-html.js';
import { getById } from '../data/recipes.js';


const detailsTemplate = (recipe) => html`
<h2>Details Page</h2>
${recipe
        ? html`
<h3>${recipe.name}</h3>
<h4>Ingredients</h4>
${recipe.ingredients.map(i => html`<p>${i}</p>`)}
<h4>Steps</h4>
${recipe.steps.map(s => html`<p>${s}</p>`)}`
        : 'Loading...'}`;


export async function showDetails(ctx) {
    const productId = ctx.params.productId;

    ctx.render(detailsTemplate());

    const recipe = await getById(productId);
    console.log(recipe.ingredients);

    ctx.render(detailsTemplate(recipe));
}