import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../../utilitaires/anciensTypes/categorie';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  inputValue: string = "";
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
  
  updateValue(value: string){
    this.inputValue = value.trim();
  }

  constructor() { }

  ngOnInit() {
  }

}
