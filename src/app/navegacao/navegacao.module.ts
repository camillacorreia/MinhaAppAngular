import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from '../navegacao/menu/menu.component';
import { HomeComponent } from '../navegacao/home/home.component';
import { FooterComponent } from '../navegacao/footer/footer.component';

@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    HomeComponent,
    FooterComponent
  ]
})
export class NavegacaoModule { }
