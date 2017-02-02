import initialState from '../IncomeData';
import { UNSELECT_ALL_DAY, SELECT_ALL_DAY, UNSELECT_HOUR, SELECT_HOUR, UNSELECT_ALL} from '../constants/index'
import { calculateDependentSelections } from '../helpers/helperFunctions'

export default function changeStore(state = initialState, action) {
	var newHoursState, dependentSelections;

	switch (action.type) {
		case UNSELECT_ALL_DAY:
			newHoursState = [
				...state[0].slice(0, action.payload[0]),
				[],
				...state[0].slice(action.payload[0]+1)
			];
			dependentSelections = calculateDependentSelections(newHoursState, state[1]);
			return [
				newHoursState,
				dependentSelections
			];

		case SELECT_ALL_DAY:
			newHoursState = [
				...state[0].slice(0, action.payload[0]),
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				...state[0].slice(action.payload[0]+1)
			];
			dependentSelections = calculateDependentSelections(newHoursState, state[1]);
			return [
				newHoursState,
				dependentSelections
			];

		case UNSELECT_HOUR:
			newHoursState = [
				...state[0].slice(0, action.payload[0]),
				[
					...state[0][action.payload[0]].slice(0, action.payload[1]),
					0,
					...state[0][action.payload[0]].slice(action.payload[1]+1)
				],
					...state[0].slice(action.payload[0]+1)
				];
				dependentSelections = calculateDependentSelections(newHoursState, state[1]);
				return [
					newHoursState,
					dependentSelections
				];

		case SELECT_HOUR:
			newHoursState = [
				...state[0].slice(0, action.payload[0]),
				[
					...state[0][action.payload[0]].slice(0, action.payload[1]),
					1,
					...state[0][action.payload[0]].slice(action.payload[1]+1)
				],
				...state[0].slice(action.payload[0]+1)
			];
			dependentSelections = calculateDependentSelections(newHoursState, state[1]);
			return [
				newHoursState,
				dependentSelections
			];

		case UNSELECT_ALL:
			newHoursState = [[],[],[],[],[],[],[]];
			dependentSelections = calculateDependentSelections(newHoursState, state[1]);
			return [
				newHoursState,
				dependentSelections
			];

		default:
			return state
	}
}
