import { Component, OnInit } from '@angular/core';
import { CoffeeOrigin } from '../coffee'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  coffee: CoffeeOrigin = {
    id: 1,
    name: 'Ethiopian Yirgacheffe',
    profile: 'floral, light sourness'
  }
  constructor() { }

  ngOnInit() {
  }

}
