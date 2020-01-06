import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaireViewTemplateComponent } from './commentaire-view-template.component';

describe('CommentaireViewTemplateComponent', () => {
  let component: CommentaireViewTemplateComponent;
  let fixture: ComponentFixture<CommentaireViewTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentaireViewTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentaireViewTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
