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
  private rowSelection;
  private autoGroupColumnDef;
  private domLayout;

  columnDefs = [
    {
      headerName: "Seleccionar",
      field: "athlete",
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
    },
    {headerName: 'Make', field: 'make', sortable: true, filter: true,  resizable: true },
    {headerName: 'Make', field: 'make', sortable: true, filter: true, resizable: true },
    {headerName: 'Model', field: 'model', sortable: true, filter: true, resizable: true },
    {headerName: 'Price', field: 'price', sortable: true, filter: true, resizable: true},
    {headerName: 'Pricexxx', field: 'pricexxx', sortable: true, filter: true, resizable: true},
];

rowData = [
    { checkboxSelection: true, make: 'Toyota', model: 'Celica', price: 35000, pricexxx: 20000 },
    { checkboxSelection: true, make: 'Ford', model: 'Mondeo', price: 32000, pricexxx: 369888 },
    { checkboxSelection: true, make: 'Porsche', model: 'Boxter', price: 72000, pricexxx: 92540000 }

];
  constructor(private ps: HomeService) { 


    this.rowSelection = "multiple";
    this.autoGroupColumnDef = {
      headerName: "Athlete",
      field: "athlete",
      cellRenderer: "agGroupCellRenderer",
      cellRendererParams: { checkbox: true }
    };
  }

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
