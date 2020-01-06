import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseViewTemplateComponent } from './entreprise-view-template.component';

describe('EntrepriseViewTemplateComponent', () => {
  let component: EntrepriseViewTemplateComponent;
  let fixture: ComponentFixture<EntrepriseViewTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrepriseViewTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseViewTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
