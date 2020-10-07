import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Box, Container} from '@material-ui/core';
import { fetchAddTodo, fetchCheck, fetchDeleteTodo, fetchTodos, searchTodos, setEditMode } from '../../redux/todos';
import Header from './Header';
import AddTodo from './AddTodo';
import ToDoList from './ToDoList';
import Copyright from '../common/Copyright';
import { isAuthCheck } from '../common/IsAuthCheck';
import { compose } from 'redux';
import { logout } from '../../redux/auth';


  
let Main = (props) => {
    useEffect(props.fetchTodos, []);
    let addTodo = (formData) =>{
        props.fetchAddTodo(formData.todoText);
    }
    let search = (formData) => {
        props.searchTodos(formData.searchText)
    }
    return (
        <>
            <Header search={search} logout={props.logout} />
            <Container component="main" maxWidth="md">
                <ToDoList {...props} />
                <AddTodo onSubmit={addTodo} />
            </Container>
            <Box mt={8}>
                <Copyright />
            </Box>
        </>
    );
}

let mapStateToProps = (state) => {
    return {
        todos: state.todos.items,
        loginedUser: state.auth.loginedUser
    }
}

export default compose(connect(mapStateToProps, {
    fetchTodos,
    setEditMode, 
    fetchCheck, 
    fetchDeleteTodo,
    fetchAddTodo,
    searchTodos,
    logout,
}),
isAuthCheck,
)(Main);