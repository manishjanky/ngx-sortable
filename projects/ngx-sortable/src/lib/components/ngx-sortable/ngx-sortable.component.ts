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
import { CommandKey, SortableEvent } from "../../types/ngx-sortable.types";
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
  @Output() public dragStart: EventEmitter<SortableEvent> = new EventEmitter();
  @Output() public dropped: EventEmitter<SortableEvent> = new EventEmitter();
  @Output() public moveDown: EventEmitter<SortableEvent> = new EventEmitter();
  @Output() public moveUp: EventEmitter<SortableEvent> = new EventEmitter();
  @Output() public remove: EventEmitter<SortableEvent> = new EventEmitter();
  @Input() public listStyle: any = {
    height: "250px",
    width: "300px",
    dropZoneHeight: "50px",
  };
  @Output() public listSorted: EventEmitter<any> = new EventEmitter();
  @ContentChild(TemplateRef) public itemTemplate: TemplateRef<
    NgForOfContext<any>
  >;
  @Input() arrowKeySort: boolean;
  @Input() commandKey: CommandKey = CommandKey.CtrlKey;
  public selectedItem: any;
  public draggedIndex = -1;
  public onDragOverIndex = -1;
  constructor() {
    // console.log('Intializing...');
  }

  @HostListener("document:keydown", ["$event"]) public onArrowKeyDown(
    $event: KeyboardEvent
  ) {
    /** istanbul ignore else */
    if (this.arrowKeySort) {
      /** istanbul ignore else */
      if ($event.key === "ArrowUp" && $event[this.commandKey]) {
        this.onMoveUp($event);
      }
      /** istanbul ignore else */
      if ($event.key === "ArrowDown" && $event[this.commandKey]) {
        this.onMoveDown($event);
      }
      $event.preventDefault();
    }
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

  public onMoveUp($event?: any) {
    const index = this.items.indexOf(this.selectedItem);
    /** istanbul ignore else */
    if (index === 0) {
      return;
    }
    this.swapElements(index, index - 1);
    this.moveUp.emit({
      event: $event,
      itemIndex: index,
      newIndex: index - 1,
      item: this.selectedItem,
    });
    this.listSorted.emit(this.items);
  }

  public onMoveDown($event?: any) {
    const index = this.items.indexOf(this.selectedItem);
    if (index === this.items.length - 1) {
      return;
    }
    this.swapElements(index, index + 1);
    this.moveDown.emit({
      event: $event,
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
