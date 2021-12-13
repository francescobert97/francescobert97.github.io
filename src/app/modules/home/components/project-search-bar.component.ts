import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';

@Component({
  selector: 'app-project-search-bar',
  template: `
    <input
      class="search-bar box-shadow-green text-light"
      (keypress)="sendSearchAtParent($event)"
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

  ngOnInit(): void {}

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

  public sendSearchAtParent(event: Event) {
    this.emitResult(this.getSearchData());
  }
}
