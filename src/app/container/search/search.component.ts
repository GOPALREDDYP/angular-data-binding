import { Component,ElementRef,EventEmitter, Output, ViewChild} from '@angular/core';


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

  @ViewChild('searchInput') searchInputElement :ElementRef;

  //2.Raise the event and emit the search text.
  onSearchTextChanged()
  {
    this.searchTextChanged.emit(this.searchText);
  }
  
  // upateSearchText(inputEle: HTMLInputElement){
  //     this.searchText = inputEle.value;
  //     this.searchTextChanged.emit(this.searchText);
  // }

  upateSearchText(){
    this.searchText =  this.searchInputElement.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
}
}