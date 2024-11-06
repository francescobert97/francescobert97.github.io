import {
  Component,
  OnInit,
  Output,
  EventEmitter,

} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
} from 'rxjs/operators';

@Component({
  selector: 'app-project-search-bar',
  template: `
  <div class="position-relative test p-3 rounded box-shadow-green">

    <input
      class="search-bar box-shadow-green text-light"
      [formControl]="searchInput"
      name="search"
      type="search"
      placeholder="Search projects!"
    />
  </div>

  `,
  styles: [
    `
    .test {
      background: black;
    }
      .search-bar {
        right: 35%;
        top: 46%;
        border-radius: 10px;
        border:1px solid rgb(0,255,255) ;
        outline: none;
        padding: 0.5rem;
        animation: inputAnimation  2.4s infinite;
        transform: 300px;
      }
      .search-bar::placeholder {
        color: white;
      }

      @keyframes inputAnimation {
        from {
          background:rgb(0,255,255, 0.4);
      }
        to {
           background: rgb(0,255,255, 0.8);
      }
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
      map((text:any) => (text || '').toLowerCase()),
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
