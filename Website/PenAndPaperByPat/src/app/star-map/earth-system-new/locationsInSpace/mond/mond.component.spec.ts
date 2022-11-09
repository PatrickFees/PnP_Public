import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MondComponent } from './mond.component';

describe('MondComponent', () => {
  let component: MondComponent;
  let fixture: ComponentFixture<MondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
