import React from 'react';
import { ITodo } from '../../types/Todo';
import DeleteButton from '../buttons/DeleteButton';
import EditButton from '../buttons/EditButton';
import Indicator from './Indicator';
import StatusButtons from './StatusButtons';

type Props = { todo: ITodo };

const Todo: React.FC<Props> = ({ todo }) => {
	const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

	const handlePress = () => setIsExpanded(s => !s);

	const todoClassName = isExpanded ? 'todo todo-expanded' : 'todo';

	return (
		<div className={todoClassName} onClick={handlePress}>
			<div className='todo__title'>{todo.title}</div>
			<div className='todo__description'>{todo.description}</div>

			<Indicator status={todo.status} />

			<div className='todo__buttons'>
				<EditButton todo={todo} />

				<DeleteButton id={todo.id} />
			</div>

			{isExpanded && <StatusButtons status={todo.status} id={todo.id} />}
		</div>
	);
};

export default React.memo(Todo);
