import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//-- angular material
import { 
  MatButtonModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ],
  exports:[
    MatButtonModule,
    MatCardModule

  ]
  
})
export class MaterialModule { }
