import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaksListComponent } from './paks-list.component';

describe('PaksListComponent', () => {
  let component: PaksListComponent;
  let fixture: ComponentFixture<PaksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaksListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
