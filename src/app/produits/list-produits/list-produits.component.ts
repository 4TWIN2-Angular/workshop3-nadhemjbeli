import { Component, OnInit } from '@angular/core';
import { Produit } from '../../models/produit';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {

  p:Produit=new Produit();
  code : string="";
  nb : number=-1;
  hidden : boolean = true;
  listProduits: Produit[];
  updateTVA(p:Produit, i:number){
    p.tauxTVA=0.02;
    this.hidden=false;
    this.nb = i;
  }
  addProduct(){
    this.listProduits.push(this.p);
    this.p=new Produit();
  }
  constructor() { }
  getTaille(p: Produit){
    if (p.prixUnitaire <= 50)
    return '20';
    else return '';
  }
  getStyle(p: number){
    if (p <= 50){
      return 'italic';
    }
    else return '';
  }
//2ème méthode avec ngStyle
  getTheStyle(p:Produit){
    if (p.prixUnitaire <= 50)
    return {color: 'blue', fontStyle:'italic', fontSize:'20px'};
    else return {};
  }

  //3ème méthode avec ngClass
  getClasseCss(p){
    if (p.prixUnitaire <= 50)
    return 'class1';
    else return '';
  }
  ngOnInit(): void {
    this.listProduits=[
      {idProduit:1,code:"P147852P",libelle:"Produit1", prixUnitaire:12.5, tauxTVA:0.02},
      {idProduit:2,code:"P147552P",libelle:"Produit1", prixUnitaire:30, tauxTVA:0.1980},
      {idProduit:3,code:"D14785CC",libelle:"Produit1", prixUnitaire:20, tauxTVA:0.1980},
      {idProduit:4,code:"E147852P",libelle:"Produit1", prixUnitaire:50, tauxTVA:0.1980},
      {idProduit:5,code:"F147852P",libelle:"Produit1", prixUnitaire:70, tauxTVA:0.02},
      ]
  }

}
