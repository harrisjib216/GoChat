const INITIAL_STATE = {
    authToken: null,
};

// login the user
const LOGIN = 'LOGIN';
export const login = (token) => {
    // cache to local storage

    // insert into the store
}


// logout the user
export const logout = () => {
    // remove from local storage

    // remove from store
}



export const AuthReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        default:
            return state;
    }
}