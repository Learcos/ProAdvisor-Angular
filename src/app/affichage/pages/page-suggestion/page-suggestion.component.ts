import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-suggestion',
  templateUrl: './page-suggestion.component.html',
  styleUrls: ['./page-suggestion.component.scss']
})
export class PageSuggestionComponent implements OnInit {

  suggestFormEntreprise: FormGroup;
  suggestFormService: FormGroup;
  pagesupp: boolean = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.suggestFormEntreprise = this.fb.group({  // Crée une instance de FormGroup
      nom: ['', [Validators.minLength(8), Validators.required]],                   // Crée une instance de FormControl
      siren: [],                   
      siret: [],                                      
      representant: [],                   
      email: ['', Validators.email],   
      telephone: ['', Validators.pattern('[0-9]*')],                
      description: [],                   
      adresse: [],                   
      ville: [],                  
      codePostal: [],                   
      service: [''],                   
      zoneIntervention: [''],                                      
    });
    this.suggestFormService = this.fb.group({  // Crée une instance de FormGroup
      URLService: ['', [Validators.minLength(4), Validators.required]],
      nom: ['', [Validators.minLength(8), Validators.required]],                   // Crée une instance de FormControl                                   
      representant: [],                                     
      email: ['', Validators.email],                    
      telephone: ['', Validators.pattern('[0-9]*')],  
      description: [],                                    
      service: [''],                                                        
      numeroRegistre: [''],                   
    });
  }

  suggestEntreprise() {
    console.log('Données du formulaire...', this.suggestFormEntreprise.get('nom').value);
    console.log('Données du formulaire...', this.suggestFormEntreprise.value);
    this.pagesupp = false;
  }

  suggestSW() {
    console.log('Données du formulaire...', this.suggestFormService.get('nom').value);
    console.log('Données du formulaire...', this.suggestFormService.value);
    this.pagesupp = false;
  }

}
