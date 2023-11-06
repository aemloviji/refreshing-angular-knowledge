import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://assets.bonappetit.com/photos/64349ba03fd52da4745a35f4/1:1/w_3563,h_3563,c_limit/04102023-ratatouille-lede.jpg'
    ),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }
}
