import AsyncStorage from '@react-native-community/async-storage';

const INITIAL_STATE = {
	authToken: null,
};

// login the user
const SET_TOKEN = 'SET_TOKEN';
export const setToken = (authToken) => {
	// cache to local storage
	AsyncStorage.setItem('authToken', authToken);

	// insert into the store
	return {
		type: SET_TOKEN,
		payload: authToken,
	};
};

// logout the user
export const logout = () => {
	// remove from local storage
	AsyncStorage.removeItem('token');
	AsyncStorage.removeItem('authToken');

	// remove from store
};

export const AuthReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case SET_TOKEN:
			return {
				...state,
				authToken: payload,
			};
		default:
			return state;
	}
};
