import * as types from '../constants/ActionTypes';

export function getPost(post) {
	return { type: types.GET_POST, post }
} 

export function deletePost(id) {
	return { type: types.DELETE_POST, post }
}