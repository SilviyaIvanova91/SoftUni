import * as recipeService from "../api/recipe.js";

export async function preload(ctx, next) {
  const recipeId = ctx.params.id;
  const recipe = await recipeService.getById(recipeId);
  ctx.recipe = recipe;

  if (ctx.user && ctx.user._id == recipe._ownerId) {
    recipe._isOwner = true;
  }

  next();
}
