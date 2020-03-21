import { Component, OnInit } from '@angular/core';
import { Indredient } from '../shared/indredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  indredients: Indredient[] = [
    new Indredient('Guinness', 1000),
    new Indredient('Jameson', 40)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
