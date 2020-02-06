import { Component, OnInit } from '@angular/core';
import { Categorie } from '../categorie';
import {CategorieService} from '../categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  categories: Categorie[] = [
    { id: 1, name: 'Peinture' },
    { id: 2, name: 'Architecte' },
    { id: 3, name: 'Chauffagiste' },
    { id: 4, name: 'Entrepreneur en toiture' },
    { id: 5, name: 'Menuisier' },
    { id: 6, name: 'Auto-moto' },
    { id: 7, name: 'Jardinage' },
    { id: 8, name: 'Panneaux solaires' },
    { id: 9, name: 'Isolation' },
    { id: 10, name: 'Aménagement intérieur' },
    { id: 11, name: 'Eolien' },
    { id: 12, name: 'Energie' }
  ];
  getCategories(): void {
    this.categorieService.getCategories()
        .subscribe(categories => this.categories = categories);
  }

  constructor(private categorieService: CategorieService) { }

  //les catégories sont récupérées juste après la création du composant avec ngOnInit()
  ngOnInit() {
  }

}
