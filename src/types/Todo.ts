export interface ITodo {
	id: number;
	title: string;
	description: string;
	status: 'pending' | 'wontdo' | 'done';
}
