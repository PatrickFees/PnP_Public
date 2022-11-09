import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RastlinaComponent } from './rastlina.component';

describe('RastlinaComponent', () => {
  let component: RastlinaComponent;
  let fixture: ComponentFixture<RastlinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RastlinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RastlinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
