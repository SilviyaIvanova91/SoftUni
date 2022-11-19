// import { createHashRouter } from './hashRouter.js';
import { createHistoryRouter } from './historyRouter.js';


const views = {
    '/': () => '<h2>Home Page</h2><p>Welcome to our site!</p>',
    '/home': () => '<h2>Home Page</h2><p>Welcome to our site!</p>',
    '/catalog': () => '<h2>Catalog</h2><ul><li>Product 1</li><li>Product 2</li><li>Product 3</li></ul>',
    '/about': () => '<h2>Abotu Us</h2><p>Contact: +1-555-6197</p>',
};

const main = document.querySelector('main');

// const getName = createHashRouter(main, views, start);
const getName = createHistoryRouter(main, views, start);

// Start application
start(getName());

function start(name) {
    const view = views[name];

    if (typeof view == 'function') {
        main.innerHTML = view();
        return true;
    }
    return false;
}