import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatSliderModule
  ],
  exports: [
    MatSliderModule,
    MatInputModule,
    MatIconModule,
  ],
})
export class MaterialModule { }
