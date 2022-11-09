import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RochaComponent } from './rocha.component';

describe('RochaComponent', () => {
  let component: RochaComponent;
  let fixture: ComponentFixture<RochaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RochaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RochaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
