const inintialState = {
    usersTodos: [
        {
            id: 0,
            login: 'alex3000@mail.ru',
            firstName: 'Alex',
            lastName: 'Pol',
            password: '11111111',
            phone: 67522063,
            country: 'New Aneni',
            todos: [
                {
                    id: 0,
                    text: 'Second Todo',
                    checked: false,
                },
                {
                    id: 1,
                    text: 'New todo',
                    checked: false,
                }
            ],
            checked: [ 1, 2 ]
        },
        {
            id: 1,
            login: 'jul3000@gmail.com',
            firstName: 'Julya',
            lastName: 'Pol',
            password: '12345678',
            phone: 37367522063,
            country: 'Chishinev',
            todos: [
                {
                    id: 2,
                    text: 'My todo',
                    checked: false,
                },
                {
                    id: 3,
                    text: 'My tod',
                    checked: false,
                }
            ],
            checked: [ 0, 3 ]
        },
    ]
}

const usersTodos = (state = inintialState, action) => {
    let newState = {...state}
    switch(action.type) {
        case USERS_TODOS_ADD_TODO:
            let newId = `f${(+new Date).toString(16)}`;;
            let newTodo = {
                id: newId,
                text: action.text ? action.text : '',
                checked: false,
            }
            newState.usersTodos = state.usersTodos;
            newState.usersTodos.forEach( (user, i) => {
                if(user.login == action.user){
                    newState.usersTodos[i].todos = [newTodo, ...state.usersTodos[i].todos]
                }
            })
            return newState;
        case USERS_TODOS_SAVE_TODO: // save after edit
            newState.usersTodos = state.usersTodos.map(user => {
                let newUser = {...user};
                newUser.todos = user.todos.map(todo => {
                    if(todo.id == action.todoId){
                        todo.text = action.text
                    }
                    return todo
                })
                return newUser
            });
            return newState;
        case USERS_TODOS_CHECK_TODO:
            newState.usersTodos = state.usersTodos.map(user => {
                let newUser = {...user};
                if(user.login == action.userLogin){
                    newUser.checked = [...user.checked, action.todoId]
                }
                return newUser
            });
            return newState;
        case USERS_TODOS_UNCHECK_TODO:
            newState.usersTodos = state.usersTodos.map(user => {
                let newUser = {...user};
                if(user.login == action.userLogin){
                    newUser.checked = user.checked.filter(id => id != action.todoId)
                }
                return newUser
            });
            return newState;
        case USERS_TODOS_DELETE_TODO:
            newState.usersTodos = state.usersTodos.map(user => {
                let newUser = {...user};
                newUser.todos = user.todos.filter(todo => {
                    if(todo.id != action.todoId) return todo
                })
                newUser.checked = user.checked.filter(id => id != action.todoId)
                return newUser
            });
            return newState;
        case USERS_TODOS_REGISTRATION:
            let userId = `f${(+new Date).toString(16)}`;
            let newUser = {
                id: userId,
                login: action.authDates.email,
                firstName: action.authDates.firstName,
                lastName: action.authDates.lastName,
                password: action.authDates.password,
                phone: action.authDates.phone,
                country: action.authDates.country,
                todos: [],
                checked: [],
            }
            // // check if login(email) not equal with other users
            // newState.successStatus = 'success';
            newState.usersTodos = [...state.usersTodos, newUser];
            return newState;
        default:
            return state;
    }
}

// types
const USERS_TODOS_ADD_TODO = "USERS_TODOS_ADD_TODO";
const USERS_TODOS_SAVE_TODO = "USERS_TODOS_SAVE_TODO";
const USERS_TODOS_CHECK_TODO = "USERS_TODOS_CHECK_TODO";
const USERS_TODOS_UNCHECK_TODO = "USERS_TODOS_UNCHECK_TODO";
const USERS_TODOS_DELETE_TODO = "USERS_TODOS_DELETE_TODO";
const USERS_TODOS_REGISTRATION = "USERS_TODOS_REGISTRATION";

// actionCreators
export const addTodoAPI = (user, text) => {
    return{
        type: USERS_TODOS_ADD_TODO,
        user,
        text
    }
}
export const saveTodoAPI = (todoId, text) => {
    return{
        type: USERS_TODOS_SAVE_TODO,
        text,
        todoId
    }
}
export const checkTodoAPI = (userLogin, todoId) => {
    return{
        type: USERS_TODOS_CHECK_TODO,
        todoId,
        userLogin
    }
}
export const uncheckTodoAPI = (userLogin, todoId) => {
    return{
        type: USERS_TODOS_UNCHECK_TODO,
        todoId,
        userLogin
    }
}
export const deleteTodoAPI = (todoId) => {
    return{
        type: USERS_TODOS_DELETE_TODO,
        todoId,
    }
}
export const registrationAPI = (authDates) => {
    return{
        type: USERS_TODOS_REGISTRATION,
        authDates,
    }
}

export default usersTodos;