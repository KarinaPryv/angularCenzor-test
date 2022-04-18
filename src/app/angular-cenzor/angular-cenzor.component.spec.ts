import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCenzorComponent } from './angular-cenzor.component';

describe('AngularCenzorComponent', () => {
  let component: AngularCenzorComponent;
  let fixture: ComponentFixture<AngularCenzorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularCenzorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCenzorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
