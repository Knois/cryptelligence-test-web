import React from 'react';
import { ITodo } from '../../types/Todo';

type Props = { status: ITodo['status'] };

const Indicator: React.FC<Props> = ({ status }) => {
	if (status === 'wontdo') {
		return <div className='todo__indicator todo__indicator-red' />;
	} else if (status === 'pending') {
		return <div className='todo__indicator todo__indicator-yellow' />;
	} else {
		return <div className='todo__indicator' />;
	}
};

export default React.memo(Indicator);
