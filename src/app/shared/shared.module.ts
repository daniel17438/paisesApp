import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],

  // aqui se exporta este componente para ser usado fuera de este modulo
  exports: [
    SidebarComponent
  ],
})
export class SharedModule { }
