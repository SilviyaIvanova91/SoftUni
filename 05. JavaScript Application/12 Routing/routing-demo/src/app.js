import page from '../node_modules/page/page.mjs';
import { render as litRender } from '../node_modules/lit-html/lit-html.js';
import { showAbout } from './views/about.js';
import { showHome } from './views/home.js';
import { showCatalog } from './views/catalog.js';
import { showDetails } from './views/details.js';
import { showLogin } from './views/login.js';


const main = document.querySelector('main');

page(decorateContext);

page('/index.html', '/');
page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:productId', showDetails);
page('/about', showAbout);
page('/login', showLogin);
page('*', notFound);


page.start();


function render(templateResult) {
    litRender(templateResult, main);
}

function decorateContext(ctx, next) {
    ctx.render = render;
    next();
}

function notFound(ctx) {
    ctx.render('404 Not Found');
}