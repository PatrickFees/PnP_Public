import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiticComponent } from './pitic.component';

describe('PiticComponent', () => {
  let component: PiticComponent;
  let fixture: ComponentFixture<PiticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
