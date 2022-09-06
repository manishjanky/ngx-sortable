export enum CommandKey {
  CtrlKey = "ctrlKey",
  ShiftKey = "shiftKey",
  Altkey = "altKey",
  MetaKey = "metaKey",
}

export interface SortableEvent {
  event?: any;
  itemIndex: number;
  newIndex?: number;
  item: any;
}
