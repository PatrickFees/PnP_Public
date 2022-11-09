import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManiskoerComponent } from './maniskoer.component';

describe('ManiskoerComponent', () => {
  let component: ManiskoerComponent;
  let fixture: ComponentFixture<ManiskoerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManiskoerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManiskoerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
