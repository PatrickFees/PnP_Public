import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbiddenSystemComponent } from './forbidden-system.component';

describe('ForbiddenSystemComponent', () => {
  let component: ForbiddenSystemComponent;
  let fixture: ComponentFixture<ForbiddenSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForbiddenSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForbiddenSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
