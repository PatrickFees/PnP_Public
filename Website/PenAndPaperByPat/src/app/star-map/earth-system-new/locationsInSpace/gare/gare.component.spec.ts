import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GareComponent } from './gare.component';

describe('GareComponent', () => {
  let component: GareComponent;
  let fixture: ComponentFixture<GareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
