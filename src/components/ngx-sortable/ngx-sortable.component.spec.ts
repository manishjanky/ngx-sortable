import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSortableComponent } from './ngx-sortable.component';

describe('NgxSortableComponent', () => {
  let component: NgxSortableComponent;
  let fixture: ComponentFixture<NgxSortableComponent>;
  const items = ['Item1', 'item2', 'Item3', 'item4', 'Item5', 'item6']
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxSortableComponent]
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

  it('should swap the elements', () => {
    component.items = JSON.parse(JSON.stringify(items));
    const item1 = items[2];
    component.swapElements(2, 5);
    expect(component.items[5]).toEqual(item1);
  });

  it('should set the selected item', () => {
    component.items = JSON.parse(JSON.stringify(items));;
    const item1 = items[2];
    component.selectItem(items[2]);
    expect(component.selectedItem).toEqual(item1);
  });

  it('should move down the selected item', () => {
    component.items = JSON.parse(JSON.stringify(items));;
    const item1 = items[2];
    component.selectItem(items[2]);
    component.moveDown();
    expect(component.items[3]).toEqual(item1);
  });

  it('should move down the selected item', () => {
    component.items = ['item9'];
    component.selectItem('item9');
    component.moveDown();
    expect(component.items[0]).toEqual('item9');
  });

  it('should move up the selected item', () => {
    component.items = JSON.parse(JSON.stringify(items));
    const item1 = items[2];
    component.selectItem(items[2]);
    component.moveUp();
    expect(component.items[1]).toEqual(item1);
  });

  it('should move up the selected item', () => {
    component.items = ['item9'];
    component.selectItem('item9');
    component.moveUp();
    expect(component.items[0]).toEqual('item9');
  });

  it('should start dragging set dragging element', () => {
    component.items = JSON.parse(JSON.stringify(items));
    component.onDragStart(new Event('dragstart'), 3);
    expect(component.draggedIndex).toEqual(3);
  });

  it('should start dragging set dragging element', () => {
    component.items = JSON.parse(JSON.stringify(items));
    component.allowDrop(new Event('dragover'), 4);
    expect(component.onDragOverIndex).toEqual(4);
  });

  it('should handle on drop of element', () => {
    component.items = JSON.parse(JSON.stringify(items));
    const item1 = items[4];
    component.selectedItem = items[4];
    component.draggedIndex = 4;
    component.onDragOverIndex = 2;
    component.onDrop(new Event('drop'), 2);
    expect(component.items[2]).toEqual(item1);
  });
});
