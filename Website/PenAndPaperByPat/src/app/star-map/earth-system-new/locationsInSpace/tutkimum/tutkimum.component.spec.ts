import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutkimumComponent } from './tutkimum.component';

describe('TutkimumComponent', () => {
  let component: TutkimumComponent;
  let fixture: ComponentFixture<TutkimumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutkimumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutkimumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
