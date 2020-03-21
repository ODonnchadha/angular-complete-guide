import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChangedEvent : EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Guinness', 1000),
        new Ingredient('Jameson', 40)
      ];

    getIngredients() : Ingredient[] {
        return this.ingredients.slice();
    }

    addIngredient(ingredient : Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChangedEvent.emit(this.ingredients.slice());
    }
}