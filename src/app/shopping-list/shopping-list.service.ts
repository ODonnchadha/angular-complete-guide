import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChangedEvent : Subject<Ingredient[]> = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Guinness', 1000),
        new Ingredient('Jameson', 40)
      ];

    getIngredients() : Ingredient[] {
        return this.ingredients.slice();
    }

    addIngredient(ingredient : Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChangedEvent.next(this.ingredients.slice());
    }

    addIngredients(ingredients : Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChangedEvent.next(this.ingredients.slice());
    }
}