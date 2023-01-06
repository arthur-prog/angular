import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cheese} from "../models/cheese.model";
import {CheeseService} from "../services/cheese/cheese.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private cheese!: Cheese;

  constructor(
    private http : HttpClient,
    private Cheese: CheeseService
  ) { }

  ngOnInit(): void {
  }

  apiScript(): void {
    this.http.get('https://public.opendatasoft.com/api/records/1.0/search/?dataset=fromagescsv-fromagescsv&q=&rows=1000')
      .subscribe(Response => {
        let resp = JSON.stringify(Response);
        let respJson = JSON.parse(resp);
        let data = respJson.records;
        data.forEach((element: any) => {
          let cheese = new Cheese();
          cheese.dpt = element.fields.departement;
          cheese.cheeseName = element.fields.fromage;
          cheese.cheeseImg = 'https://www.bernardgaborit.fr/wp-content/uploads/2020/05/Plateau-fromages-bio-.jpg';
          cheese.milk = element.fields.lait;
          cheese.wiki = element.fields.page_francaise;
          this.Cheese.saveNewCheese(cheese).subscribe();
        });
      })
  }

}
