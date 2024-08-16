import { observer } from 'mobx-react-lite';
import formStore from '../../store/FormStore';

const AddButton = () => {
	const handlePress = () => formStore.open();

	return (
		<div className='button button-plus' onClick={handlePress}>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M12 5V19'
					stroke='white'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M5 12H19'
					stroke='white'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</div>
	);
};

export default observer(AddButton);
