import initialState from '../IncomeData';
import { UNSELECT_ALL_DAY, SELECT_ALL_DAY, UNSELECT_HOUR, SELECT_HOUR, UNSELECT_ALL} from '../constants/index'

function calculateBusyDayRow(state) {
	state[0].forEach((hoursRow, day) => {

		if (hoursRow.some( hour => {
			return !!hour
		})) {
			state[1][day][0] = 1;
		} else {
			state[1][day][0] = 0;
		}

		let IsAllDaySelected = true;

		for (let i = 0; i<24; i++) {
			if (hoursRow[i] == 0 || hoursRow[i] == undefined) {
				IsAllDaySelected = false
			}
		}

		if (IsAllDaySelected) {
			state[1][day][1] = 1;
		} else {
			state[1][day][1] = 0;
		}
	})
	return state;
}

export default function changeStore(state = initialState, action) {
	switch (action.type) {

		case UNSELECT_ALL_DAY:
			state[0][action.payload[0]] = [];
			state[1][action.payload[0]] = [];
			return [
				...state
			]

		case SELECT_ALL_DAY:
			state[0][action.payload[0]] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,];
			state[1][action.payload[0]] = [1,1];
			return [
				...state
			]

		case UNSELECT_HOUR:
			state[0][action.payload[0]][action.payload[1]] = 0;
			state = calculateBusyDayRow(state);
			return [
				...state
			]

		case SELECT_HOUR:
			state[0][action.payload[0]][action.payload[1]] = 1;
			state = calculateBusyDayRow(state);
			return [
				...state
			]

		case UNSELECT_ALL:
			state = [ [[],[],[],[],[],[],[]], [[],[],[],[],[],[],[]] ];

		default:
		return state
	}
}
