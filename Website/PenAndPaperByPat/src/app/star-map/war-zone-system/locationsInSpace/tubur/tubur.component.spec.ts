import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuburComponent } from './tubur.component';

describe('TuburComponent', () => {
  let component: TuburComponent;
  let fixture: ComponentFixture<TuburComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuburComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuburComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
