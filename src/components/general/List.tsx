import { observer } from 'mobx-react-lite';
import React from 'react';
import formStore from '../../store/FormStore';
import todoStore from '../../store/TodoStore';
import Todo from '../todo';
import Form from './Form';

const List = () => {
	const listRef = React.useRef<HTMLDivElement>(null);

	React.useLayoutEffect(() => {
		todoStore.getAllTodos();
	}, []);

	React.useEffect(() => {
		if (formStore.isOpen) {
			const timeoutId = setTimeout(() => {
				if (listRef.current) {
					listRef.current.scrollTo({
						top: listRef.current.scrollHeight,
						behavior: 'smooth',
					});
				}
			}, 100);

			return () => clearTimeout(timeoutId);
		}
	}, [formStore.isOpen]);

	return (
		<div className='list' ref={listRef}>
			{todoStore.todos.map(todo => (
				<Todo key={todo.id} todo={todo} />
			))}

			<Form />
		</div>
	);
};

export default observer(List);
