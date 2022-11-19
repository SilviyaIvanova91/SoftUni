import * as api from './api.js';


const endpoints = {
    recipes: '/data/recipes',
    recipeById: '/data/recipes/',
};

export async function getAllRecipes() {
    return api.get(endpoints.recipes);
}

export async function getById(id) {
    return api.get(endpoints.recipeById + id);
}