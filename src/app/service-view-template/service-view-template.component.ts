import { Component, OnInit, Input } from '@angular/core';
import { ServiceApi } from '../serviceApi';
import { ServiceApiService } from '../service-api.service';

@Component({
  selector: 'app-service-view-template',
  templateUrl: './service-view-template.component.html',
  styleUrls: ['./service-view-template.component.scss']
})
export class ServiceViewTemplateComponent implements OnInit {

  @Input() service: ServiceApi;
  yellowStarDisplayer: Array<number>;
  greyStarDisplayer: Array<number>;

  isInteger(number: number): boolean{
    return Math.floor(number) == number;
  }

  constructor(private serviceService: ServiceApiService) { }

  storeService(service: ServiceApi){
    this.serviceService.storeServiceClique(service);
  }

  ngOnInit() {
     /* 
     *  Pour boucler avec *ngFor dans le template (.html) sans avoir un objet sur lequel on peut boucler:
     *  déclarer un tableau "fake" qui ne contient rien, juste le nombre d'éléments nécessaires
     */
    this.yellowStarDisplayer = new Array(Math.floor(4));
    this.greyStarDisplayer = new Array(Math.floor(1))
  }


}
