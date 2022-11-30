import * as api from "./api.js";

let pageSize = 2;

let endpoints = {
  byId: "/data/recipes/",
  create: "/data/recipes",
  count: "/data/recipes?count",
  recent:
    "/data/recipes?select=_id%2Cname%2Cimg&sortBy=_createdOn%20desc&pageSize=3",
  recipes: `/data/recipes?sortBy=_createdOn%20desc&pageSize=${pageSize}&offset=`,
  getByQuery: (query) => `/data/recipes?where=name%20LIKE%20%22${query}%22`,
};

export async function getRecent() {
  return api.get(endpoints.recent);
}

export async function getById(id) {
  return api.get(endpoints.byId + id);
}

export async function getAll(page = 1) {
  const [recipes, count] = await Promise.all([
    api.get(endpoints.recipes + (page - 1) * pageSize),
    api.get(endpoints.count),
  ]);

  return {
    recipes,
    pages: Math.ceil(count / pageSize),
  };
}

export async function create(data) {
  return api.post(endpoints.create, data);
}

export async function deleteById(id) {
  return api.del(endpoints.byId + id);
}

export async function editById(id, data) {
  return api.put(endpoints.byId + id, data);
}

export async function getByQuery(query) {
  return api.get(endpoints.getByQuery(query));
}
