import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [ 
    new Recipe(
      'Protein', 
      'Decent tasting stuff. Highly underrated.', 
      'https://www.stickpng.com/assets/images/5a01c454cad612fd1571181b.png', [
        new Ingredient('Guinness', 100),
        new Ingredient('Jameson', 12),           
      ]
    ), new Recipe(
      'Fatty Acids', 
      'Great tasting. Wonderous. And probably quite amazing.', 
      'https://image.shutterstock.com/z/stock-vector-fa-letters-four-colors-in-abstract-background-logo-design-identity-in-circle-alphabet-letter-417449098.jpg',[
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}