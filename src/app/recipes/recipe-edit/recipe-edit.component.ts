import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;

  ingredientsControls = [];

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.init();
      }
    )
  }

  onAddIngredient(): void {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [
        Validators.required, 
        Validators.pattern(/^[1-9]+[0-9]*$/)
      ])
    }))
  }

  onCancel(): void {
  }

  onDeleteIngredient(index: number): void {
  }

  onSubmit(): void {
  }

  private init(): void {
    let name: string = '';
    let imagePath: string = '';
    let description: string = '';
    let recipeIngredients: FormArray = new FormArray([])

    if (this.editMode) {
      const recipe: Recipe = this.recipeService.getRecipeById(this.id);
      
      name = recipe.name;
      imagePath = recipe.imagePath;
      description = recipe.description;
      
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(
              ingredient.amount, [
                Validators.required, 
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
          }))
        }
      }
    };

    this.recipeForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': recipeIngredients 
    });
  }
}
