import { createSelector } from 'reselect';

// primitive Selector
const getTodos = (state) => {
    return state.todos.items;
}
const getEditableId = (state) => {
    return state.todos.editableId;
}
// Complicated Selector created by createSelector, 
// used Primitive Selectors, or others Complicated Selectors
export const getEditableTodo = createSelector( [getTodos, getEditableId], (todos, editableId) => {
    if(todos.length != 0) { return todos.filter(todo => todo.id == editableId)[0]; }
    else{ return []; }
})

export const getAllTodosFromState = (userLogin, users, text) => {
    let checkedTodos = [];
    users.forEach(user => {
        if(user.login == userLogin){
            checkedTodos = user.checked;
        }
    });
    let allTodos = [];
    users.forEach(user => {
        user.todos.forEach(todo => {
            if(todo.text.toLowerCase().indexOf(text.toLowerCase()) > -1){
                let newTodo = {...todo, own: user.login}
                checkedTodos.forEach(checkedId => {
                    if(newTodo.id == checkedId){
                        newTodo.checked = true
                    }
                })
                allTodos.push(newTodo)
            }
        });
    });
    return allTodos;
}