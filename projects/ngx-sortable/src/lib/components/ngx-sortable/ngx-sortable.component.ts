import { NgForOfContext } from "@angular/common";
import {
  Component,
  Input,
  Output,
  ContentChild,
  EventEmitter,
  TemplateRef,
  HostListener,
} from "@angular/core";

@Component({
  selector: "ngx-sortable",
  templateUrl: "./ngx-sortable.component.html",
  styleUrls: ["./ngx-sortable.component.scss"],
})
export class NgxSortableComponent {
  @Input() public items: any[] = [];
  @Input() public name: string;
  @Input() public showHeader = true;
  @Input() public removeOnDropOutside = false;
  @Output() public dragStart = new EventEmitter();
  @Output() public dropped = new EventEmitter();
  @Output() public moveDown = new EventEmitter();
  @Output() public moveUp = new EventEmitter();
  @Output() public remove = new EventEmitter();
  @Input() public listStyle: any = {
    height: "250px",
    width: "300px",
    dropZoneHeight: "50px",
  };
  @Output() public listSorted: EventEmitter<any> = new EventEmitter();
  @ContentChild(TemplateRef) public itemTemplate: TemplateRef<
    NgForOfContext<any>
  >;
  public selectedItem: any;
  public draggedIndex = -1;
  public onDragOverIndex = -1;
  constructor() {
    // console.log('Intializing...');
  }

  @HostListener("document:dragend") public onDragEnd() {
    if (this.removeOnDropOutside) {
      this.onRemoveDrop();
    } else {
      this.draggedIndex = -1;
      this.onDragOverIndex = -1;
    }
  }

  public selectItem(item: any) {
    this.selectedItem = item;
  }

  public onMoveUp() {
    const index = this.items.indexOf(this.selectedItem);
    if (index === 0) {
      return;
    }
    this.swapElements(index, index - 1);
    this.moveUp.emit({
      itemIndex: index,
      newIndex: index - 1,
      item: this.selectedItem,
    });
    this.listSorted.emit(this.items);
  }

  public onMoveDown() {
    const index = this.items.indexOf(this.selectedItem);
    if (index === this.items.length - 1) {
      return;
    }
    this.swapElements(index, index + 1);
    this.moveDown.emit({
      itemIndex: index,
      newIndex: index + 1,
      item: this.selectedItem,
    });
    this.listSorted.emit(this.items);
  }
  public onDrop($event: any, index: number) {
    // index is of the element on which the item is dropped
    /** istanbul ignore else */
    if (index === this.draggedIndex) {
      this.draggedIndex = -1;
      this.onDragOverIndex = -1;
      return;
    }
    const dragIndex = this.draggedIndex;
    this.handleDrop(index);
    this.dropped.emit({
      event: $event,
      itemIndex: dragIndex,
      newIndex: index,
      item: this.selectedItem,
    });
  }
  public allowDrop($event: any, index: number) {
    // index is of the item on which the item is currently hovered
    this.onDragOverIndex = index;
    $event.preventDefault();
  }
  public onDragStart($event: any, index: number) {
    this.selectItem(this.items[index]);
    this.draggedIndex = index;
    this.dragStart.emit({
      event: $event,
      itemIndex: index,
      newIndex: -1,
      item: this.selectedItem,
    });
  }

  public handleDrop(droppedIndex: number) {
    const item = this.items[this.draggedIndex];
    this.items.splice(this.draggedIndex, 1);
    this.items.splice(droppedIndex, 0, item);
    this.draggedIndex = -1;
    this.onDragOverIndex = -1;
    this.listSorted.emit(this.items);
  }

  public swapElements(oldIndex: number, newIndex: number) {
    const temp = this.items[oldIndex];
    this.items[oldIndex] = this.items[newIndex];
    this.items[newIndex] = temp;
  }

  public onRemoveDrop() {
    this.items.splice(this.draggedIndex, 1);
    this.remove.emit({
      item: this.selectedItem,
      itemIndex: this.draggedIndex,
    });
    this.draggedIndex = -1;
    this.onDragOverIndex = -1;
    this.listSorted.emit(this.items);
  }
}
