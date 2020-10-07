import { authAPI } from "../api/api"

const inintialState = {
    successStatus: '', // ''-nothing, success- when need show some text, next - open next window (redirect), error - show error(need with set timeout to return to form)
    isAuth: false,
    loginedUser: null,
}

const auth = (state = inintialState, action) => {
    let newState = {...state}
    switch(action.type) {
        case LOGIN:
            newState.loginedUser = action.login
            newState.isAuth = true;
            newState.successStatus = 'success';
            return newState;
        case LOGOUT:
            newState.isAuth = false;
            newState.loginedUser = null;
            newState.successStatus = '';
            return newState;
        case SET_SUCCESS_STATUS:
            newState.successStatus = action.status
            return newState;
        default:
            return state;
    }
}

// types
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const SET_SUCCESS_STATUS = "SET_SUCCESS_STATUS";

// actionCreators
export const login = (login) => {
    return{
        type: LOGIN,
        login
    }
}
export const setSuccessStatus = (status) => {
    return{
        type: SET_SUCCESS_STATUS,
        status
    }
}
export const logout = () => {
    return{
        type: LOGOUT
    }
}

// async 
export const fetchLogin = (authDates) => (dispatch) => {
    authAPI.login(authDates)
}
export const fetchRegistration = (authDates) => (dispatch) => {
    authAPI.registration(authDates)
}
export default auth;