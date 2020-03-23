import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-suggestion',
  templateUrl: './page-suggestion.component.html',
  styleUrls: ['./page-suggestion.component.scss']
})
export class PageSuggestionComponent implements OnInit {

  suggestForm: FormGroup;
  pagesupp: boolean = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.suggestForm = this.fb.group({  // Crée une instance de FormGroup
      nom: ['', [Validators.minLength(8), Validators.required]],                   // Crée une instance de FormControl
      siren: [],                   // Crée une instance de FormControl
      siret: [],                   // Crée une instance de FormControl
      adresse: [],                   // Crée une instance de FormControl
      representant: [],                   // Crée une instance de FormControl
      email: ['', Validators.email],                   // Crée une instance de FormControl
      description: [],                   // Crée une instance de FormControl
      telephone: ['', Validators.pattern('[0-9]*')],                   // Crée une instance de FormControl
      ville: [],                   // Crée une instance de FormControl
      codePostal: [],                   // Crée une instance de FormControl
      service: [''],                   // Crée une instance de FormControl
      zoneIntervention: [''],                   // Crée une instance de FormControl
      URLService: [''],                   // Crée une instance de FormControl
      numeroRegistre: [''],                   // Crée une instance de FormControl
    });
  }

  suggestEntreprise() {
    console.log('Données du formulaire...', this.suggestForm.get('nom').value);
    console.log('Données du formulaire...', this.suggestForm.value);
    this.pagesupp = false;
  }

  suggestSW() {
    console.log('Données du formulaire...', this.suggestForm.get('nom').value);
    console.log('Données du formulaire...', this.suggestForm.value);
    this.pagesupp = false;
  }

}
