import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [ 
    new Recipe(
      'Protein', 
      'Decent tasting stuff. Highly underrated.', 
      'https://www.stickpng.com/assets/images/5a01c454cad612fd1571181b.png'
    ), new Recipe(
      'Fatty Acids', 
      'Great tasting. Wonderous. And probably quite amazing.', 
      'https://image.shutterstock.com/z/stock-vector-fa-letters-four-colors-in-abstract-background-logo-design-identity-in-circle-alphabet-letter-417449098.jpg'
    )
  ];

  @Output() selectedRecipeToDisplayEvent = new EventEmitter<Recipe>();
  onRecipeSelected(recipe : Recipe) {
    this.selectedRecipeToDisplayEvent.emit(recipe);
  }

  constructor() { }

  ngOnInit(): void { }
}