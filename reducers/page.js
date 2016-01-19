const initialState = {
	title: "pasdesujin"
};

export function update ( state = initialState, action ) {
	console.log('update reducer called with state ', state , ' and action ', action);

	switch (action.type) {
		case 'UPDATE_PAGE_TITLE':
			return {
				...state,
				title: 'honeybell'
			}
		default:
			return state;
	}
}