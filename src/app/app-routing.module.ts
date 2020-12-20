import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadComponent } from './application/crud/read/read.component';
import { HomeComponent } from './application/home/home.component';
import { Error404Component } from './application/error404/error404.component';
import { UpdateComponent } from './application/crud/update/update.component';
import { FunComponent } from './application/fun/fun.component';
import { ContactComponent } from './application/contact/contact.component';
import { ReactiveFormsComponent } from './application/reactive-forms/reactive-forms.component';
import { TutorielComponent } from './application/tutoriel/tutoriel.component';


const routes: Routes = [
  {path:'tutorielCrud', component:TutorielComponent},
  
  {path:'updateForm/:id', component:UpdateComponent},
  
  {path:'home', component:HomeComponent},
  {path:'crud', component:ReadComponent},
  {path:'fun', component:FunComponent},
  {path:'contact', component:ContactComponent},
  {path:'formulaire', component:ReactiveFormsComponent},

  {path:'**', component:Error404Component},
  {path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
