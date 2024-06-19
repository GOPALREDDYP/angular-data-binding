import { Component, Input } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product:Product;
  @Input() productListComponent:ProductListComponent;

  ngOnInit()
  {

    this.product =this.productListComponent.selectedProduct;
  }

  getColor(name) { 
    switch (name) {
      case 'White':
        return 'green';
      case 'Blue':
        return 'blue';
      case 'Red':
        return 'Red';
      case 'Black':
        return 'black';
      case 'Brown':
        return 'yellow';
      default:
          return 'green';
          
    }
    // color: ["White", "Blue", "Black", "Brown", "Red"],
  }
}
