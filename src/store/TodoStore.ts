import { makeAutoObservable } from 'mobx';
import API from '../api/api';
import { ITodo } from '../types/Todo';

class TodoStore {
	todos: ITodo[] = [];

	constructor() {
		makeAutoObservable(this);
	}

	setTodos(todos: ITodo[]) {
		this.todos = todos;
	}

	async getAllTodos() {
		try {
			const response = await API.getAllTodos();

			this.setTodos(response.data);
		} catch (error) {
			console.error('Failed to fetch todos', error);
		}
	}

	async create(title: ITodo['title'], description: ITodo['description']) {
		try {
			const response = await API.createTodo(title, description);
			console.log(response.data);

			this.getAllTodos();
		} catch (error) {
			console.error('Failed to create todo', error);
		}
	}

	async update(
		title: ITodo['title'],
		description: ITodo['description'],
		id: ITodo['id']
	) {
		try {
			const response = await API.updateTodo(title, description, id);
			console.log(response.data);

			this.getAllTodos();
		} catch (error) {
			console.error('Failed to update todo', error);
		}
	}

	async setStatus(status: ITodo['status'], id: ITodo['id']) {
		try {
			const response = await API.setStatusOfTodo(status, id);
			console.log(response.data);

			this.getAllTodos();
		} catch (error) {
			console.error('Failed to set status of todo', error);
		}
	}

	async delete(id: ITodo['id']) {
		try {
			const response = await API.deleteTodo(id);
			console.log(response.data);

			this.getAllTodos();
		} catch (error) {
			console.error('Failed to delete todo', error);
		}
	}
}

const todoStore = new TodoStore();

export default todoStore;
