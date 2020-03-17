import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtoilePourcentageComponent } from './etoile-pourcentage.component';

describe('EtoilePourcentageComponent', () => {
  let component: EtoilePourcentageComponent;
  let fixture: ComponentFixture<EtoilePourcentageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtoilePourcentageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtoilePourcentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
