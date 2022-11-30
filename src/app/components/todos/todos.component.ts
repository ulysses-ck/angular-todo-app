import { Component } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
	selector: 'app-todos',
	templateUrl: './todos.component.html',
	styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
	listTodo: Todo[] = [
		{ name: 'sasd', state: false },
		{ name: 'asd', state: false },
	];
	nameTodo: string = '';

	constructor() {}

	addTodo() {
		console.log(this.nameTodo);

		//create Todo

		const todo: Todo = {
			name: this.nameTodo,
			state: false,
		};
		//add Todo to 'listTodo'
		this.listTodo.push(todo);

		//reset form

		this.nameTodo = '';
	}

	deleteTodo(index: number): void {
		this.listTodo.splice(index, 1);
	}

	changeStateTodo(todoParams: Todo, index: number): void {
		this.listTodo[index].state = !todoParams.state;
	}
}
