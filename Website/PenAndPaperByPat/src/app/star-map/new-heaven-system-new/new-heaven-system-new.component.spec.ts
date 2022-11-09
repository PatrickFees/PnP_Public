import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHeavenSystemNew } from './new-heaven-system-new.component';

describe('EarthSystemComponent', () =>
{
  let component: NewHeavenSystemNew;
  let fixture: ComponentFixture<NewHeavenSystemNew>;

  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      declarations: [NewHeavenSystemNew]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NewHeavenSystemNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
