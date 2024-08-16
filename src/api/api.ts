import { AxiosResponse } from 'axios';
import { ITodo } from '../types/Todo';
import instance from './instance';

const getAllTodos = async (): Promise<AxiosResponse<ITodo[]>> => {
	console.log('trying to get all todo');
	return instance.get<ITodo[]>('todo');
};

const createTodo = async (
	title: ITodo['title'],
	description: ITodo['description']
): Promise<AxiosResponse<ITodo>> => {
	console.log('trying to create todo');
	return instance.post<ITodo>('todo', { title, description });
};

const setStatusOfTodo = async (
	status: ITodo['status'],
	id: ITodo['id']
): Promise<AxiosResponse<ITodo>> => {
	console.log('trying to set status of todo');
	return instance.put<ITodo>(`todo/status/${id}`, { status });
};

const updateTodo = async (
	title: ITodo['title'],
	description: ITodo['description'],
	id: ITodo['id']
): Promise<AxiosResponse<ITodo>> => {
	console.log('trying to update todo');
	return instance.put<ITodo>(`todo/${id}`, { title, description });
};

const deleteTodo = async (id: ITodo['id']): Promise<AxiosResponse> => {
	console.log('trying to delete todo');
	return instance.delete(`todo/${id}`);
};

const API = {
	getAllTodos,
	createTodo,
	setStatusOfTodo,
	updateTodo,
	deleteTodo,
};

export default API;
