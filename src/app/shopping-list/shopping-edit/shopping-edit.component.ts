import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }

  @Output() addIngredientEvent = new EventEmitter<Ingredient>();

  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountImputRef: ElementRef;

  onAddInput(): void {
    const name : string = this.nameInputRef.nativeElement.value;
    const amount: number = this.amountImputRef.nativeElement.value
    const item = new Ingredient(name, amount);

    // Emit a new event and pass this data to the parent component.
    this.addIngredientEvent.emit(item);
  }

  ngOnInit(): void { }
}
