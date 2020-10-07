import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Checkbox from '@material-ui/core/Checkbox';
import {IconButton, ListItemIcon, ListItemSecondaryAction, Typography} from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    list: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      marginBottom: theme.spacing(1),
    },
    h6: {
        paddingLeft: theme.spacing(1)
    }
}));

let ToDoList = (props) => {
    const classes = useStyles();
  
    return(
        <List dense className={classes.list}>
            {
                props.todos.length == 0
                ? <Typography component="h6" variant="h6" className={classes.h6}>
                    No todos
                </Typography>
                : props.todos.map((todo) => {
                    const labelId = `checkbox-list-secondary-label-${todo.id}`;
                    return (
                        <ListItem key={todo.id} button onClick={() => props.fetchCheck(todo.id, todo.checked)}>
                            <ListItemIcon>
                                <Checkbox
                                edge="start"
                                checked={todo.checked}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                                
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={todo.text} />
                            {todo.own == props.loginedUser 
                            ? <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="edit" onClick={() => props.setEditMode(todo.id)}>
                                    <EditIcon fontSize="small" style={{ color: green[500] }} />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete" onClick={() => props.fetchDeleteTodo(todo.id)}>
                                    <DeleteIcon fontSize="small" color="secondary" />
                                </IconButton>
                            </ListItemSecondaryAction>
                            : <></>}
                        </ListItem>
                    );
                })
            }
        </List>
    )
}
export default ToDoList;