import { GET_POST, DELETE_POST } from '../constants/ActionTypes'


const initialState = []

export default function posts(state=initialState, action) {
	switch(action.type){
		case DELETE_POST:
			return 
				state.map(function(post){
					post._id !== action.id
				})
		default: 
			return state	
	}
}