import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './application/navbar/navbar.component';
import { FormulairesComponent } from './application/formulaires/formulaires.component'
import { FunComponent } from './application/fun/fun.component';
import { ContactComponent } from './application/contact/contact.component';
import { HomeComponent } from './application/home/home.component';
import { Error404Component } from './application/error404/error404.component';
import { TutorielComponent } from './application/tutoriel/tutoriel.component';
import { ReadComponent } from './application/crud/read/read.component';
import { UpdateComponent } from './application/crud/update/update.component';
import { DeleteComponent } from './application/crud/delete/delete.component';
import { FooterComponent } from './application/footer/footer.component';
import { ReactiveFormsComponent } from './application/reactive-forms/reactive-forms.component';
import { UpdateVideoComponent } from './application/fun/update-video/update-video.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormulairesComponent,
    FunComponent,
    ContactComponent,
    HomeComponent,
    Error404Component,
    TutorielComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
    FooterComponent,
    ReactiveFormsComponent,
    UpdateVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
