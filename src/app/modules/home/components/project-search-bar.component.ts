import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-project-search-bar',
  template: `
   <input class="search-bar text-light" (change)="emitResult()" [formControl]="searchInput" name="search" type="search">
  `,
  styles: [
    `
    .search-bar {
      box-shadow: 0px 0px 22px -2px #37dbd6;
      border-radius: 10px;
      background: black;
      border: none;
      outline: none;
      padding: 0.5rem;
    }
    `
  ]
})
export class ProjectSearchBarComponent implements OnInit {
  @Output() public resultEmitter = new EventEmitter<string>();
  public searchResult:string = '';

  constructor() { }

  ngOnInit(): void {
    this.searchInput.valueChanges
    .pipe(
      filter(text => text.length >= 3),
      debounceTime(800),
      distinctUntilChanged()
    )
    .subscribe(text => this.searchResult = text);
  }

  searchInput = new FormControl('');
  
  public emitResult() {
    this.resultEmitter.emit(this.searchResult);
  }

}
