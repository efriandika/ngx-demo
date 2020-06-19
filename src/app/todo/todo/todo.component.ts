import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

    public form: FormGroup;
    public todoList = [];

    constructor(
        private fb: FormBuilder
    ) {}

    /**
     * Example of angular component life cycle: ngOnInit, ngOnChanges, ngOnDestroy, etc..
     * see {@link https://angular.io/guide/lifecycle-hooks#lifecycle-event-sequence Angular Docs}
     * for further detail
     */
    ngOnInit(): void {
        this.createForm();
    }

    /**
     * Init the form
     */
    public createForm() {
        this.form = this.fb.group({
            task: ['', Validators.required],
            target: [''],
        });
    }

    /**
     * Handling form submission
     */
    public handleSubmit() {
        let newTask = this.form.value;

        // Add the new task into JS array
        // For more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
        this.todoList.push(newTask);

        // Reset the form
        this.form.reset();
    }

    /**
     * Remove a task from the list
     * @param index index of the task
     */
    public removeTask(index) {
        // For more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
        this.todoList.splice(index, 1);
    }
}
