import { CHANGE_FILTER,RESET_FILTERS } from '../actions/filterActions';


const initialState = {
	categoryFilter: ''
};

export default function filterReducer(state=initialState, action){
	switch(action.type) {
		case CHANGE_FILTER: {
			return {
				...state,
				categoryFilter: action.categoryFilter
			}
		}
		case RESET_FILTERS:{
			return {
				...state,
				categoryFilter:[]
			}
		}

		default: {
			return state
		}
	}
}