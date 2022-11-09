import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchinComponent } from './schin.component';

describe('SchinComponent', () => {
  let component: SchinComponent;
  let fixture: ComponentFixture<SchinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
