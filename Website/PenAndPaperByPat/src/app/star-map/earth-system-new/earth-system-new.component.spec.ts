import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthSystemNewComponent } from './earth-system-new.component';

describe('NewHeavenSystemComponent', () =>
{
  let component: EarthSystemNewComponent;
  let fixture: ComponentFixture<EarthSystemNewComponent>;

  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      declarations: [EarthSystemNewComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EarthSystemNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
