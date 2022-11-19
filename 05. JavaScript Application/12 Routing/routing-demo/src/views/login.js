import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../data/users.js';


const loginTemplate = (onSubmit) => html`
<h2>Login</h2>
<form @submit=${onSubmit}>
    <label>Email: <input type="text" name="email"></label>
    <label>Password: <input type="password" name="password"></label>
    <input type="submit" value="Login">
</form>`;


export function showLogin(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        await login(formData.get('email'), formData.get('password'));
        ctx.page.redirect('/');
    }
}
