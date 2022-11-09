import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErdeComponent } from './erde.component';

describe('ErdeComponent', () => {
  let component: ErdeComponent;
  let fixture: ComponentFixture<ErdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErdeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
