import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) shoppingListForm: NgForm;
  subscription: Subscription;
  index: number;
  editMode: boolean = false;
  editIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { 
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.editingIngredientsEvent
      .subscribe((index: number) => {
        this.index = index;
        this.editMode = true;
        this.editIngredient = this.shoppingListService.getIngredientById(index);
        this.shoppingListForm.setValue({
          name: this.editIngredient.name,
          amount: this.editIngredient.amount
        })
      });
  }

  onClear(): void {
    this.editMode = false;
    this.shoppingListForm.reset();
  }

  onDelete(): void {
    this.shoppingListService.deleteIngredient(this.index);
    this.onClear();
  }

  onSubmit(form: NgForm) {
    const val = form.value;
    const ingredient = new Ingredient(val.name, val.amount);

    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.index, ingredient);
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }

    this.editMode = false;
    form.reset();
  }
}
