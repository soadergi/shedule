import initialState from '../IncomeData';

export default function changeStore(state = initialState, action) {
	switch (action.type) {

		case 'UNSELECT_ALL_DAY':
			state[action.payload[0]] = []
			return [
				...state
			]

		case 'SELECT_ALL_DAY':
			state[action.payload[0]] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,];
			return [
				...state,
			]

		case 'UNSELECT_HOUR':
			state[action.payload[0]][action.payload[1]] = 0;
			return [
				...state,
			]

		case 'SELECT_HOUR':
			state[action.payload[0]][action.payload[1]] = 1;
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
