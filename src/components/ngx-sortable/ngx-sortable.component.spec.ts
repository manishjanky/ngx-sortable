import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSortableComponent } from './ngx-sortable.component';

describe('NgxSortableComponent', () => {
  let component: NgxSortableComponent;
  let fixture: ComponentFixture<NgxSortableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSortableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSortableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
