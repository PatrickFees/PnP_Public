import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuengerGottesComponent } from './juenger-gottes.component';

describe('JuengerGottesComponent', () => {
  let component: JuengerGottesComponent;
  let fixture: ComponentFixture<JuengerGottesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuengerGottesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuengerGottesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
