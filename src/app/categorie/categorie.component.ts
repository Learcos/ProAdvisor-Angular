import { Component, OnInit } from '@angular/core';
import { Categorie } from '../categorie';
import {CategorieService} from '../categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  categories: Categorie[];

  getCategories(): void {
    this.categorieService.getCategories()
        .subscribe(categories => this.categories = categories);
  }

  constructor(private categorieService: CategorieService) { }

  //les catégories sont récupérées juste après la création du composant avec ngOnInit()
  ngOnInit() {
    this.getCategories();
  }

}
