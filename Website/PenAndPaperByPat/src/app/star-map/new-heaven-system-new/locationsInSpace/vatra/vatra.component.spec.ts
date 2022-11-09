import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VatraComponent } from './vatra.component';

describe('VatraComponent', () => {
  let component: VatraComponent;
  let fixture: ComponentFixture<VatraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VatraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VatraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
