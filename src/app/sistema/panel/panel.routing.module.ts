import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

import { PanelComponent } from './panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { AllCuratedComponent } from './../photos/all-curated/all-curated.component';

const routes: Routes = [
    {
        path: '',
        component: PanelComponent,
        children: [
            {
                path: '',
                component: DashboardComponent,
            },
            {
                path: 'footer',
                component: FooterComponent
            },
            {
                path: 'all',
                component: AllCuratedComponent
            }
        ]  
    } 
    
]

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ]
})
export class PanelRoutingModule {}