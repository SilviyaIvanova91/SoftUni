export function createHashRouter(main, views, start) {
    window.addEventListener('hashchange', () => start(getName()));

    return getName;

    function getName() {
        return window.location.hash;
    }
}