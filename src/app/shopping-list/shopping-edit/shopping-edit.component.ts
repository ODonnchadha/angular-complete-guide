import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountImputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { 
  }

  ngOnInit(): void { 
  }

  onAddInput(): void {
    const name : string = this.nameInputRef.nativeElement.value;
    const amount: number = this.amountImputRef.nativeElement.value
    const ingredient = new Ingredient(name, amount);
    
    this.shoppingListService.addIngredient(ingredient);
  }
}
