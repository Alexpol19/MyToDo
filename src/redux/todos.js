import { todosAPI } from "../api/api";
import store from "./store";

const inintialState = {
    editTodo: false,
    editableId: null,
    searchText: '',
    items: [],
}

const todos = (state = inintialState, action) => {
    let newState = {...state}
    switch(action.type) {
        case SET_TODOS: 
            newState.items = [...action.todos]
            return newState;
        case SET_EDIT_MODE:
            newState.editTodo = !state.editTodo;
            newState.editableId = action.id;
            return newState
        case SET_SEARCH_TEXT:
            newState.searchText = action.text
            return newState;
        default:
            return state;
    }
}

// types
const SET_TODOS = "SET_TODOS";
const SET_EDIT_MODE = "SET_EDIT_MODE";
const SET_SEARCH_TEXT = "SET_SEARCH_TEXT";

// actionCreators
const setTodos = (todos) => {
    return{
        type: SET_TODOS,
        todos
    }
}
export const setEditMode = (id) => {
    return{
        type: SET_EDIT_MODE,
        id
    }
}
const setSearchText = (text) => {
    return{
        type: SET_SEARCH_TEXT,
        text
    }
}

// async operations
export const fetchTodos = () => (dispatch) => {
    let user = store.getState().auth.loginedUser;
    let searchText = store.getState().todos.searchText;
    setTimeout( function (){
        let allTodos = todosAPI.getAllTodos(user, searchText)
        dispatch(setTodos(allTodos));
    }, 100);
}
export const searchTodos = (text) => (dispatch) => {
    dispatch(setSearchText(text));
    dispatch(fetchTodos())
}
export const fetchAddTodo = (text) => (dispatch) => {
    let user = store.getState().auth.loginedUser;
    todosAPI.addTodo(user, text);
    dispatch(setSearchText(''));
    dispatch(fetchTodos())
}
export const fetchSaveTodo = (text) => (dispatch) => {
    let todoId = store.getState().todos.editableId;
    todosAPI.saveTodo(todoId, text);
    dispatch(fetchTodos())
}
export const fetchCheck = (todoId, todoCheckStatus) => (dispatch) => {
    let user = store.getState().auth.loginedUser; 
    todosAPI.checkTodo(user, todoId, todoCheckStatus);
    dispatch(fetchTodos())
}
export const fetchDeleteTodo = (todoId) => (dispatch) => {
    todosAPI.deleteTodo(todoId);
    dispatch(fetchTodos())
}


export default todos;