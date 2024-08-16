import { makeAutoObservable } from 'mobx';
import { ITodo } from '../types/Todo';

class FormStore {
	isOpen: boolean = false;
	title: ITodo['title'] = '';
	description: ITodo['description'] = '';
	id: ITodo['id'] | null = null;

	constructor() {
		makeAutoObservable(this);
	}

	open() {
		this.isOpen = true;
	}

	close() {
		this.isOpen = false;
	}

	setTitle(title: ITodo['title']) {
		this.title = title;
	}

	setDescription(description: ITodo['title']) {
		this.description = description;
	}

	setId(id: ITodo['id'] | null) {
		this.id = id;
	}

	editTodo(todo: ITodo) {
		this.open();
		this.setTitle(todo.title);
		this.setDescription(todo.description);
		this.setId(todo.id);
	}

	reset() {
		this.close();
		this.setTitle('');
		this.setDescription('');
		this.setId(null);
	}
}

const formStore = new FormStore();

export default formStore;
