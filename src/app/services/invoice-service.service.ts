import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Invoices  } from '../localData/Invoices';
import { Invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService {

  constructor() { }

  getAllIn():Observable<Invoice[]>{
    const invoices = of (Invoices)
     return invoices;
 }
}
