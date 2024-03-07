import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRoomDevComponent } from './table-room-dev.component';

describe('TableRoomDevComponent', () => {
  let component: TableRoomDevComponent;
  let fixture: ComponentFixture<TableRoomDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableRoomDevComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableRoomDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
