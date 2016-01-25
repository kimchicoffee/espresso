import { UPDATE_PAGE_TITLE } from '../constants/ActionTypes'

const initialState = {
	title: "PasdeSujin",
	user: 'Sujin Lee'
}

export default function update(state = initialState, action ) {
	switch(action.type) {
		case UPDATE_PAGE_TITLE:
			return Object.assign({}, state, { title : action.title})
		default:
			return state
	}
}