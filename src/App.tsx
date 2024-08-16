import AddButton from './components/buttons/AddButtons';
import List from './components/general/List';

// @ts-ignore
import imgThree from './assets/Ellipse 12.png';
// @ts-ignore
import imgTwo from './assets/Ellipse 2.png';
// @ts-ignore
import imgFour from './assets/Ellipse 3.png';
// @ts-ignore
import imgOne from './assets/Ellipse 4.png';

const App = () => {
	return (
		<div className='page'>
			<h1>My To-Do</h1>

			<List />

			<AddButton />

			<img className='imgOne' src={imgOne} alt='Ellipse 4' />
			<img className='imgTwo' src={imgTwo} alt='Ellipse 2' />
			<img className='imgThree' src={imgThree} alt='Ellipse 12' />
			<img className='imgFour' src={imgFour} alt='Ellipse 3' />
		</div>
	);
};

export default App;
