# ngx-sortable

[![GitHub license](https://img.shields.io/github/license/manishjanky/ngx-sortable.svg)](https://github.com/me-and/mdf/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/ngx-select-dropdown.svg)]()
[![Build Status](https://travis-ci.org/manishjanky/ngx-sortable.svg?branch=master)](https://travis-ci.org/manishjanky/ngx-sortable)
[![Codecov branch](https://codecov.io/gh/manishjanky/ngx-sortable/branch/master/graphs/badge.svg)]()
[![npm](https://img.shields.io/npm/dt/ngx-sortable.svg)]()
[![GitHub top language](https://img.shields.io/github/languages/top/manishjanky/ngx-sortable.svg)]()
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/manishjanky/ngx-sortable.svg)]()
[![GitHub issues](https://img.shields.io/github/issues/manishjanky/ngx-sortable.svg)]()
[![GitHub closed issues](https://img.shields.io/github/issues-closed/manishjanky/ngx-sortable.svg)]()
[![GitHub contributors](https://img.shields.io/github/contributors/manishjanky/ngx-sortable.svg)]()

`ngx-sortable` an angular component for sorting list supporting drag and drop sort.

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
import { NgxSortableModule } from 'ngx-select-dropdown'
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

* use `<ngx-sortable></ngx-sortable>` in your templates to add pagination in your view like below

````
<ngx-sortable (change)="selectionChanged($event)" [multiple]="true" [(value)]="dataModel" [config]="config" [options]="dropdownOptions"></ngx-sortable>
````

## Config

### Input

* `multiple: boolean` - `true/false` beased if multiple selection required or not `Defaults to false`.
* `options: Array` - Array of string/objects that are to be the dropdown options.
* `value: any` - the model variable in which you want to save the selected options.
* `config: Object` - configuration object.
````
config = {
        displayKey:"description", //if objects array passed which key to be displayed defaults to description
        search:true //true/false for the search functionlity
      }
````

### Output

* `value: any` - array of selected options
* `change: Event` - change event when user changes the selected options

## Help Improve

Found a bug or an issue with this? [Open a new issue](https://github.com/manishjanky/ngx-sortable/issues) here on GitHub.

## Contributing to this project

Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)
