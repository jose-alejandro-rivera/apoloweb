import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

class body {
  ProductName: string;
  ProductDescription: string;
  ProductPrice: number;
}

class headers {
  ProductName: string;
  ProductDescription: string;
  ProductPrice: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	body : body[];
  headers : headers[];

  columnDefs = [
    {headerName: 'Make', field: 'make', sortable: true, filter: true },
    {headerName: 'Model', field: 'model', sortable: true, filter: true },
    {headerName: 'Price', field: 'price', sortable: true, filter: true}
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];
  constructor(private ps: HomeService) { }

  ngOnInit() {
  	this.ps
      .getusers()
      .subscribe((data: body[]) => {
        console.log(data);
      	if(data){
            console.log(data, 'if');
            this.body = data;
            this.headers = data

      	}
       

    });
  }

}
