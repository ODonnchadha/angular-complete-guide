import { Component, OnInit } from '@angular/core';
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
      'Decent tasting stuff', 
      'https://www.stickpng.com/assets/images/5a01c454cad612fd1571181b.png'
    ), new Recipe(
      'Fatty Acids', 
      'Great tasting stuff', 
      'https://image.shutterstock.com/z/stock-vector-fa-letters-four-colors-in-abstract-background-logo-design-identity-in-circle-alphabet-letter-417449098.jpg'
    )
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
