import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteCompletedComponent } from './user-select.component';

describe('VoteCompletedComponent', () => {
  let component: VoteCompletedComponent;
  let fixture: ComponentFixture<VoteCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VoteCompletedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoteCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
