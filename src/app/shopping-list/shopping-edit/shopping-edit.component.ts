import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) shoppingListForm: NgForm;
  subscription: Subscription;
  // editMode: boolean = false;
  // editIndex: number;
  editIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { 
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.editingIngredientsEvent
      .subscribe((index: number) => {
        // this.editIndex = index;
        // this.editMode = true;
        this.editIngredient = this.shoppingListService.getIngredientById(index);
        this.shoppingListForm.setValue({
          name: this.editIngredient.name,
          amount: this.editIngredient.amount
        })
      });
  }

  onSubmit(form: NgForm) {
    const val = form.value;
    const ingredient = new Ingredient(val.name, val.amount);
    this.shoppingListService.addIngredient(ingredient);
  }
}
