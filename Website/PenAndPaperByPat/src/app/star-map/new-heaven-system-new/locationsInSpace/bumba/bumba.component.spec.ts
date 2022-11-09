import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BumbaComponent } from './bumba.component';

describe('BumbaComponent', () => {
  let component: BumbaComponent;
  let fixture: ComponentFixture<BumbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BumbaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BumbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
