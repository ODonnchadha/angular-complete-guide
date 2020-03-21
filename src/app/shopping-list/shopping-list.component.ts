import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  indredients: Ingredient[] = [
    new Ingredient('Guinness', 1000),
    new Ingredient('Jameson', 40)
  ];

  onIngredientAdded(ingredient : Ingredient) {
    this.indredients.push(ingredient);
  }

  constructor() { }
  
  ngOnInit(): void { }
}
