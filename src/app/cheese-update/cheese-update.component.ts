import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {CheeseService} from "../services/cheese/cheese.service";

@Component({
  selector: 'app-cheese-update',
  templateUrl: './cheese-update.component.html',
  styleUrls: ['./cheese-update.component.scss']
})
export class CheeseUpdateComponent implements OnInit {

  cheese: any = null;
  change:boolean = false;

  constructor(
    private Cheese: CheeseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.Cheese.get(id).subscribe((value: any) => {
      this.cheese = value;
    });
  }

  update() {
    this.Cheese.update(this.cheese).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
      }, 3000);
    })
  }

}
