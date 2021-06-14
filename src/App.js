import React from 'react';

import './App.css';
import Header from './Components/Header';
import SwipButtons from './Components/SwipButtons';
import TinderCards from './Components/TinderCards';

function App() {
	return (
		<div className='app'>
			<Header />

			<TinderCards />
			<SwipButtons />
		</div>
	);
}

export default App;
