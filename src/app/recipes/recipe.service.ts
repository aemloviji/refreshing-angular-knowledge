import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awasome!',
      'https://cdn.britannica.com/37/236537-050-B1FD777B/Plate-of-German-Weiner-Schnitzel-with-lemon-and-roast-potatoes.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Potato', 3)]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://burgerkings.ru/image/cache/catalog/photo/824197451-angus-shef-xl-600x600.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 2)]
    ),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
