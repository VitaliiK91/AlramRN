import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Home from './src/scenes/home';
import rootReducer from './src/store/reducers';

const store = createStore(rootReducer);

const App = () => (
	<Provider store={store}>
		<Home />
	</Provider>
);

export default App;
