import initialState from '../IncomeData';

export default function changeStore(state = initialState, action) {
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
