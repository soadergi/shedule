import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createStore } from 'redux';
import initialState from'./IncomeData';

function changeStore(state = initialState, action) {
	switch (action.type) {

		case 'UNSELECT_ALL_DAY':
			state[action.day[0]] = []
			return [
				...state
			]

		case 'SELECT_ALL_DAY':
			state[action.day[0]] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,];
			return [
				...state,
			]

		case 'UNSELECT_HOUR':
			state[action.day[0]][action.day[1]] = 0;
			return [
				...state,
			]

		case 'SELECT_HOUR':
			state[action.day[0]][action.day[1]] = 1;
			return [
				...state,
			]

		case 'UNSELECT_ALL':
			state = [[],[],[],[],[],[],[]];
			return state;

		default:
		return state
	}
}

const store = createStore(changeStore);

store.subscribe(() => {
	console.log(store.getState());
})

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
