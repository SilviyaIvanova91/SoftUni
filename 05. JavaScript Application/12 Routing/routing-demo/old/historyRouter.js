export function createHistoryRouter(main, views, start) {
    window.addEventListener('popstate', () => start(getName()));
    document.body.addEventListener('click', event => {
        if (event.target.tagName == 'A') {
            window.history.pushState(null, '', event.target.href);
            if (start(getName())) {
                event.preventDefault();
            }
        }
    });

    return getName;

    function getName() {
        return window.location.pathname;
    }
}