import * as types from '../constants/ActionTypes';

export function updatePageTitle(title) {
	return { type: types.UPDATE_PAGE_TITLE, title: title }
}