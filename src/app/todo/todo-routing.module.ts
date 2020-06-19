import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodoArchiveComponent } from './todo-archive/todo-archive.component';

const routes: Routes = [
    // Call the component via routing
    { path: '', component: TodoComponent },
    { path: 'archive', component: TodoArchiveComponent },
];

/**
 * To map the "to do" module routing
 * @author efriandika
 */
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TodoRoutingModule {
}
