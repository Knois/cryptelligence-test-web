import { observer } from 'mobx-react-lite';
import React from 'react';
import formStore from '../../store/FormStore';
import todoStore from '../../store/TodoStore';

const Form: React.FC = () => {
	if (!formStore.isOpen) return null;

	const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
		formStore.setTitle(e.target.value);

	const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
		formStore.setDescription(e.target.value);

	const handlePressCancel = () => formStore.reset();

	const handlePressDone = () => {
		formStore.id
			? todoStore.update(formStore.title, formStore.description, formStore.id)
			: todoStore.create(formStore.title, formStore.description);
		formStore.reset();
	};

	return (
		<div className='form'>
			<div className='form__inputs'>
				<input
					value={formStore.title}
					onChange={onChangeTitle}
					className='form__input'
					placeholder='Title'
				/>

				<textarea
					value={formStore.description}
					onChange={onChangeDescription}
					className='form__input form__input-textarea'
					placeholder='Description'
				/>
			</div>

			<div className='form__buttons'>
				<div onClick={handlePressCancel} className='form__button'>
					<div className='form__buttonText'>Cancel</div>
				</div>

				<div
					onClick={handlePressDone}
					className='form__button form__button-violet'
				>
					<div className='form__buttonText form__buttonText-white'>Done</div>
				</div>
			</div>
		</div>
	);
};

export default observer(Form);
