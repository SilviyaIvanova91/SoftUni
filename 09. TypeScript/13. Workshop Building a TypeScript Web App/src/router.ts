import type { Routes } from "./interfaces/routes.interface";

export class Router {
  private routes: Routes;
  constructor(routes: Routes) {
    this.routes = routes;
  }

  public navigate(route: string) {
    history.pushState({}, "", route);
    this.routes[route]();
  }
}
