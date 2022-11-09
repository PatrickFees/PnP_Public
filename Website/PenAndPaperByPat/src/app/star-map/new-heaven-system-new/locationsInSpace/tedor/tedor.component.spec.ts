import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TedorComponent } from './tedor.component';

describe('TedorComponent', () => {
  let component: TedorComponent;
  let fixture: ComponentFixture<TedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
