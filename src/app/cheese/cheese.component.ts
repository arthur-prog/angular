import {Component, Input, OnInit} from '@angular/core';
import {CheeseService} from "../services/cheese/cheese.service";

@Component({
  selector: 'app-cheese',
  templateUrl: './cheese.component.html',
  styleUrls: ['./cheese.component.scss']
})
export class CheeseComponent implements OnInit {
  @Input() cheeseName!: string;
  @Input() cheeseImg!: string;
  @Input() milk!: string;
  @Input() dpt!: string;
  @Input() wiki!: string;
  @Input() id!: number;

  constructor(
    private Cheese: CheeseService
  ) { }

  ngOnInit(): void {
  }

  del(){
    this.Cheese.delete(this.id);
  }
}
