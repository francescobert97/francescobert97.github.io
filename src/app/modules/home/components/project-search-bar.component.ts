import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEvent, Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
} from 'rxjs/operators';

@Component({
  selector: 'app-project-search-bar',
  template: `
    <input
      class="search-bar box-shadow-green text-light"
      [formControl]="searchInput"
      name="search"
      type="search"
      placeholder="cerca tra i progetti"
    />
  `,
  styles: [
    `
      .search-bar {
        border-radius: 10px;
        background: black;
        border: none;
        outline: none;
        padding: 0.5rem;
      }
    `,
  ],
})
export class ProjectSearchBarComponent implements OnInit {
  @Output() public resultEmitter = new EventEmitter<any>();
  public searchResult: string = '';

  constructor() {}

  ngOnInit(): void {
    this.sendSearchAtParent();
  }

  searchInput = new FormControl('');

  private getSearchData(): Observable<string> {
 
    return this.searchInput.valueChanges.pipe(
      map((text) => text.toLowerCase()),
      debounceTime(400),
      distinctUntilChanged()
    );
  }
  private emitResult(obs: Observable<string>): void {
    this.resultEmitter.emit(obs);
  }

  public sendSearchAtParent() {
    this.emitResult(this.getSearchData());
  }
}
