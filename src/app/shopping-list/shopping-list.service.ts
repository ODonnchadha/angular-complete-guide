import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChangedEvent : Subject<Ingredient[]> = new Subject<Ingredient[]>();
    editingIngredientsEvent : Subject<number> = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Guinness', 1000),
        new Ingredient('Jameson', 40)
      ];

    addIngredient(ingredient : Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChangedEvent.next(this.ingredients.slice());
    }

    addIngredients(ingredients : Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChangedEvent.next(this.ingredients.slice());
    }

    getIngredientById(id: number) : Ingredient {
        return this.ingredients.slice()[id];
    }

    getIngredients() : Ingredient[] {
        return this.ingredients.slice();
    }
}