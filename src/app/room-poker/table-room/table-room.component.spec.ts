import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRoomComponent } from './table-room.component';

describe('TableRoomComponent', () => {
  let component: TableRoomComponent;
  let fixture: ComponentFixture<TableRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableRoomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
