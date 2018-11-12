import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TextdirectiveDirective } from './textdirective.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PorductsComponent } from './porducts/porducts.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { AdminComponent } from './admin/admin.component';

import { AlertDirective } from './_directive/alert.directive';
//----
import { MaterialModule } from './_module/material.module';
import { AppRoutingModule } from './app-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    
    AppComponent,
    TextdirectiveDirective,
    LoginComponent,
    HomeComponent,
    PorductsComponent,
    ProductlistComponent,
    AdminComponent,
    
    AlertDirective,
    
    ProductDetailsComponent,
    
    ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    
    //--  Import the Angular Material modules after Angular's BrowserModule,
    //    as the import order matters for NgModules.
    MaterialModule,
    //-routing module
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
