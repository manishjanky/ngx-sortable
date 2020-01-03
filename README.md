# ngx-sortable

[![GitHub license](https://img.shields.io/github/license/debba/ngx-sortable.svg)](https://github.com/me-and/mdf/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/ngx-sort.svg)]()
[![npm](https://img.shields.io/npm/dt/ngx-sort.svg)]()
[![GitHub top language](https://img.shields.io/github/languages/top/debba/ngx-sortable.svg)]()
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/debba/ngx-sortable.svg)]()
[![GitHub issues](https://img.shields.io/github/issues/debba/ngx-sortable.svg)]()
[![GitHub closed issues](https://img.shields.io/github/issues-closed/debba/ngx-sortable.svg)]()
[![GitHub contributors](https://img.shields.io/github/contributors/debba/ngx-sortable.svg)]()

`ngx-sortable` an angular 4 and above component for sorting list supporting drag and drop sort.

## Features
* Custom template
* Customizable
* Drag and drop sorting

## Examples

* [demo-page](https://manishjanky.github.io/ngx-sortable/)

## Installation

* `npm install ngx-sortable`

### Using with webpack and tsc builds/ angular-cli builds

* import `NgxSortableModule` into your app.module;
````
import { NgxSortableModule } from 'ngx-sortable'
````
* add `NgxSortableModule` to the imports of your NgModule:
`````
@NgModule({
  imports: [
    ...,
    NgxSortableModule
  ],
  ...
})
class YourModule { ... }
`````

* use `<ngx-sortable></ngx-sortable>` in your templates to add sortable list in your view

````
    <ngx-sortable [items]="items" [name]="'List'" (listSorted)="listOrderChanged($event)">
        <ng-template let-item>
            <div class="sortable-list-item">
                {{item}}
            </div>
        </ng-template>
    </ngx-sortable>
````

> Where content inside ``<ng-template> </ng-template>`` is the template that will be used for displaying list items. Also the class can be named accordingly this is just an example. Create a class and add it to your root style.css



## Config

### Input

* `items: any[]` - array of list items.
* `name: string` - List name that will be shown in the header.
* `listStyle: any` - list styles such as `height, width`.
* `active: boolean` - you can use this option to activate / deactivate the sorting programmatically.

````
listStyle = {
        width:'300px', //width of the list defaults to 300
        height: '250px', //height of the list defaults to 250
      }
````

### Output

* `listSorted($event): Event` - when list is sorted emits listSorted event with updated order

> Where `$event` is the sorted list

## Help Improve

Found a bug or an issue with this? [Open a new issue](https://github.com/manishjanky/ngx-sortable/issues) here on GitHub.

## Contributing to this project

Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)
