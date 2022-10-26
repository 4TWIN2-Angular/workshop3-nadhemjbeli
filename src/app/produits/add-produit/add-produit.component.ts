import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  p:Produit=new Produit();
  valid = false;
  constructor() { }

  ngOnInit(): void {
  }

  addProduct(f){
    this.valid = true;
    console.log(f);
  }
  addDetailProduct(f){
    this.valid = true;
    console.log(f);
  }

}
