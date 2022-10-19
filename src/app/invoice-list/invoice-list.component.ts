import { Component, OnInit } from '@angular/core';
import { Invoice } from '../models/invoice';
import { InvoiceServiceService } from '../services/invoice-service.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  list! : Invoice[];

  constructor(private inoviceService : InvoiceServiceService) { }

  ngOnInit(): void {

    this.getAllInvoices();
  }


  getAllInvoices(){
    this.inoviceService.getAllIn().subscribe(
      (data)=>{this.list = data ,
         console.log(this.list);}
     
    )
  }

}
