import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-project-search-bar',
  template: `
   <input [formControl]="searchInput" name="search" type="search">
  `,
  styles: [
  ]
})
export class ProjectSearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.searchInput.valueChanges
    .pipe(
      filter(text => text.length >= 3),
      debounceTime(800),
      distinctUntilChanged()
    )
    .subscribe(text => console.log(text))
  }

  searchInput = new FormControl('')

}
