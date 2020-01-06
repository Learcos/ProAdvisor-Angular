import { Component, OnInit } from '@angular/core';
import { Categorie } from '../categorie';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {

  title = "R-Pro-Advisor";
  
  constructor() { }

  ngOnInit() {
  }

}
