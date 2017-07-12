import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Home as HomeComponent } from './components/home/home';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: 'formvalidation', loadChildren: './components/formvalidation/formvalidation.module#FormValidationModule'},
            {path: 'gridexim', loadChildren: './components/gridexim/gridexim.module#GrideximModule'}
        ])    
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
