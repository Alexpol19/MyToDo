import { login, setSuccessStatus } from "../redux/auth";
import { getAllTodosFromState } from "../redux/seletors/todos-selectors";
import store from "../redux/store";
import { addTodoAPI, checkTodoAPI, uncheckTodoAPI, deleteTodoAPI, saveTodoAPI, registrationAPI } from "../redux/usersTodos";

import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://restcountries.eu/rest/v2/',
    headers: {'Content-Type': 'application/json'},
})

export const todosAPI = {
    getAllTodos(user, text = ''){
        return getAllTodosFromState(user, store.getState().usersTodos.usersTodos, text)
    },
    addTodo(user, text){
        store.dispatch(addTodoAPI(user, text))
    },
    saveTodo(todoId, text){
        store.dispatch(saveTodoAPI(todoId, text))
    },
    checkTodo(user, todoId, todoCheckStatus){
        if(todoCheckStatus == false){
            store.dispatch(checkTodoAPI(user, todoId))
        }
        else{
            store.dispatch(uncheckTodoAPI(user, todoId))
        }
    },
    deleteTodo(todoId){
        store.dispatch(deleteTodoAPI(todoId))
    },
}


export const authAPI = {
    login(authDates){
        store.getState().usersTodos.usersTodos.forEach((user) => {
            if(user.login == authDates.email && user.password == authDates.password){
                store.dispatch(login(authDates.email))
            }
        })
    },
    registration(authDates){
        store.dispatch(registrationAPI(authDates));
        store.dispatch(setSuccessStatus('success'));
    }
}

export const countriesApi = {
    getCountries(){
        return instance.get(`all?fields=name`).then((res) => {
            return res
        })
    },
}