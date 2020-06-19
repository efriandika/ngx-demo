import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    // Default Routing
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // => Redirect "/" to "/dashboard"

    // Call a Component via Routing
    { path: 'dashboard', component: DashboardComponent },

    // Call Component via Lazy Load Modules
    // Benefit: More Efficient for Some Cases
    // Explanation: All of These (correlated js file) will be loaded to the browser automatically
    // once it is requested via the routing
    { path: 'todo', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule) },
    { path: 'another', loadChildren: () => import('./another/another.module').then(m => m.AnotherModule) },
];

/**
 * To map Root app routing
 * @author efriandika
 */
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
