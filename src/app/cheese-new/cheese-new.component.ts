import { Component, OnInit } from '@angular/core';
import {Cheese} from "../models/cheese.model";
import {CheeseService} from "../services/cheese/cheese.service";

@Component({
  selector: 'app-cheese-new',
  templateUrl: './cheese-new.component.html',
  styleUrls: ['./cheese-new.component.scss']
})
export class CheeseNewComponent implements OnInit {

  public cheese!: Cheese;

  constructor(
    private Cheese: CheeseService
  ) { }

  ngOnInit(): void {
    this.cheese = new Cheese();
  }

  add() {
    this.Cheese.saveNewCheese(this.cheese).subscribe(() => {
      this.cheese = new Cheese();
    });
  }

}
