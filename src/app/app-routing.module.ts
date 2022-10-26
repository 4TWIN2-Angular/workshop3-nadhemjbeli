import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListuserComponent } from './listuser/listuser.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddProduitComponent } from './produits/add-produit/add-produit.component';
import { ListProduitsComponent } from './produits/list-produits/list-produits.component';
import { ProduitsComponent } from './produits/produits.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', redirectTo:"home", pathMatch:"full"},
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {path:'home', component:HomeComponent},
  {path:'produit', 
      component:ProduitsComponent, children:[
      {path:'list', component:ListProduitsComponent},
      {path:'add', component:AddProduitComponent},
  ]},

  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
