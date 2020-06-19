import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
    // Call the component via routing
    { path: 'hello', component: HelloComponent },

    // Default routing
    { path: '', redirectTo: '/another/hello', pathMatch: 'full' }, // Default routing
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AnotherRoutingModule {
}
