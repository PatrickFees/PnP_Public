import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SattaComponent } from './satta.component';

describe('SattaComponent', () => {
  let component: SattaComponent;
  let fixture: ComponentFixture<SattaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SattaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SattaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
