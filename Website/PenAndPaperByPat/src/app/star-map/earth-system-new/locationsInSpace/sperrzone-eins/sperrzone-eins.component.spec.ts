import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SperrzoneEinsComponent } from './sperrzone-eins.component';

describe('SperrzoneEinsComponent', () => {
  let component: SperrzoneEinsComponent;
  let fixture: ComponentFixture<SperrzoneEinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SperrzoneEinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SperrzoneEinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
