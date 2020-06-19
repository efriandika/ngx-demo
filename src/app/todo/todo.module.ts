import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoArchiveComponent } from './todo-archive/todo-archive.component';
import { TodoRoutingModule } from './todo-routing.module';

/**
 * TO handle to do features
 * @author efriandika
 */
@NgModule({
    declarations: [
        // Every component in this module scope should be registered
        TodoComponent,
        TodoArchiveComponent
    ],
    imports: [
        // Angular Modules
        CommonModule,

        // Routing Modules
        TodoRoutingModule
    ]
})
export class TodoModule {
}
