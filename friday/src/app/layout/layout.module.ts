import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LeftSiderComponent } from './left-sider/left-sider.component';
import { ContentComponent } from './content/content.component';
import { RightSiderComponent } from './right-sider/right-sider.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    LeftSiderComponent,
    ContentComponent,
    RightSiderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    LeftSiderComponent,
    ContentComponent,
    RightSiderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
