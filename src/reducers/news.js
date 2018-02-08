import {FETCH_DATA_SUCCESS} from '../constants/ActionTypes'

const initialState={
	news:[]
}

export default function newsReducer(state=initialState,action){
	switch(action.type){
		case FETCH_DATA_SUCCESS:
			return{
				...state,
				news: action.news
			}
			default: {
				return state
			}
	}
}