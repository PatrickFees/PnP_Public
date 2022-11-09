import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SperrzoneDreiComponent } from './sperrzone-drei.component';

describe('SperrzoneDreiComponent', () => {
  let component: SperrzoneDreiComponent;
  let fixture: ComponentFixture<SperrzoneDreiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SperrzoneDreiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SperrzoneDreiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
