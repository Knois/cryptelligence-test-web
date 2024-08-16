import { observer } from 'mobx-react-lite';
import todoStore from '../../store/TodoStore';
import { ITodo } from '../../types/Todo';

const getTextStyle = (bool: boolean) =>
	bool
		? 'todo__statusButton__text todo__statusButton__text-active'
		: 'todo__statusButton__text';

type Props = { status: ITodo['status']; id: ITodo['id'] };

const StatusButtons: React.FC<Props> = ({ status, id }) => {
	const isPending = status === 'pending';
	const isDone = status === 'done';
	const isWontdo = status === 'wontdo';

	const pendingClassName = isPending
		? 'todo__statusButton todo__statusButton-yellow todo__statusButton-yellowActive'
		: 'todo__statusButton todo__statusButton-yellow';

	const doneClassName = isDone
		? 'todo__statusButton todo__statusButton-green todo__statusButton-greenActive'
		: 'todo__statusButton todo__statusButton-green';

	const wontdoClassName = isWontdo
		? 'todo__statusButton todo__statusButton-red todo__statusButton-redActive'
		: 'todo__statusButton todo__statusButton-red';

	const handleClickPending = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		e.stopPropagation();
		todoStore.setStatus('pending', id);
	};

	const handleClickDone = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation();
		todoStore.setStatus('done', id);
	};

	const handleClickWontdo = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		e.stopPropagation();
		todoStore.setStatus('wontdo', id);
	};

	return (
		<div className='todo__statusButtons'>
			<div className={pendingClassName} onClick={handleClickPending}>
				<div className={getTextStyle(isPending)}>Pending</div>
			</div>

			<div className={doneClassName} onClick={handleClickDone}>
				<div className={getTextStyle(isDone)}>Done</div>
			</div>

			<div className={wontdoClassName} onClick={handleClickWontdo}>
				<div className={getTextStyle(isWontdo)}>Won't do</div>
			</div>
		</div>
	);
};

export default observer(StatusButtons);
