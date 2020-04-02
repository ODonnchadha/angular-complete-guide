import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private ingredientsSubscription: Subscription;
  ingredients: Ingredient[];

  constructor(private shoppingListService : ShoppingListService) { 
  }

  onEditItem(index: number) {
    this.shoppingListService.editingIngredientsEvent.next(index);
  }

  ngOnDestroy(): void {
    this.ingredientsSubscription.unsubscribe();
  }

  ngOnInit(): void { 
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientsSubscription = this.shoppingListService.ingredientsChangedEvent.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      })
  }
}
