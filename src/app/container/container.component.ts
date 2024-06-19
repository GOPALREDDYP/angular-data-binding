import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})

export class ContainerComponent {

  nameList:string[] =['Mark','Steve','Merry','John']; 

  searchText:string ='';

  setSearchText(value: string) {
     this.searchText=value;
    }
}
