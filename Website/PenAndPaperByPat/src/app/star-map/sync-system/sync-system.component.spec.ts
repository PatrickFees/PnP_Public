import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncSystemComponent } from './sync-system.component';

describe('SyncSystemComponent', () => {
  let component: SyncSystemComponent;
  let fixture: ComponentFixture<SyncSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyncSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyncSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
