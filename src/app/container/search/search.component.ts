import { Component,EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';

  //1.Create a custom event
  @Output()
  searchTextChanged:EventEmitter<string> = new EventEmitter<string>()

  //2.Raise the event and emit the search text.
  onSearchTextChanged()
  {
    this.searchTextChanged.emit(this.searchText);
  }
  
  upateSearchText(inputEle: HTMLInputElement){
      this.searchText = inputEle.value;
      this.searchTextChanged.emit(this.searchText);
  }
}