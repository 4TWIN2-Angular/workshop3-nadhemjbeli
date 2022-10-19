import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  id!: number;
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
 //   console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
   
  }

}
