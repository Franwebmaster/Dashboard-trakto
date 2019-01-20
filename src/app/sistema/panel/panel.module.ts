import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelComponent } from './panel.component';
import { PanelRoutingModule } from './panel.routing.module';
import { ViewComponent } from './view/view.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhotosModule } from './../photos/photos.module';
import { AroundService } from './../services/photo-around/around.service';
import { AllCuratedService } from '../services/photo-curated/all-curated.service';

import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    PanelComponent,
    ViewComponent, 
    ToolbarComponent, 
    FooterComponent, 
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    MatSidenavModule,
    PhotosModule
  ],
  providers:[
    AroundService,
    AllCuratedService
  ]
})
export class PanelModule { }
