import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarZoneSystemComponent } from './war-zone-system.component';

describe('WarZoneSystemComponent', () => {
  let component: WarZoneSystemComponent;
  let fixture: ComponentFixture<WarZoneSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarZoneSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarZoneSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
