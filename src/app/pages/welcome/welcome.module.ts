import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { WelcomeRoutingModule } from './welcome-routing.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';


import { WelcomeComponent } from './welcome.component';


@NgModule({
  imports: [
    WelcomeRoutingModule,
    NzTypographyModule,
    NzListModule,
    NzIconModule,
    NzTableModule,
    NzButtonModule,
    CommonModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
