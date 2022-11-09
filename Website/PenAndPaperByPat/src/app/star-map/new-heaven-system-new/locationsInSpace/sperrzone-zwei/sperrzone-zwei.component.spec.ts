import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SperrzoneZweiComponent } from './sperrzone-zwei.component';

describe('SperrzoneZweiComponent', () => {
  let component: SperrzoneZweiComponent;
  let fixture: ComponentFixture<SperrzoneZweiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SperrzoneZweiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SperrzoneZweiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
