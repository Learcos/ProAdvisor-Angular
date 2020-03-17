import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceViewTemplateComponent } from './service-view-template.component';

describe('ServiceViewTemplateComponent', () => {
  let component: ServiceViewTemplateComponent;
  let fixture: ComponentFixture<ServiceViewTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceViewTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceViewTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
