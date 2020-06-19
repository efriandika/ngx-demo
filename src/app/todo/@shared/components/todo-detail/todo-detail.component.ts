import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/todo.model';

/**
 * Example of shared component, it is called by tag / selector
 * To show the to do detail
 * @author efriandika
 */
@Component({
    selector: 'app-todo-detail',
    templateUrl: './todo-detail.component.html',
    styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

    // Create own property binding
    @Input() index: number;

    // This can be replaced with = "item: any" (Anything data type)
    @Input() item: Todo;

    // Create own event binding
    @Output() remove = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {
    }

    public handleDelete(index) {
        // Pass data via event binding
        // (remove)="someMethod($event)"
        // $event = Data that is passed via event emitter
        this.remove.emit(index);
    }
}
