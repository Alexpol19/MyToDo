import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { makeStyles } from '@material-ui/core/styles';
import { Button} from '@material-ui/core';
import { Input } from '../common/formControls';

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(1),
        marginLeft: 'auto'
    }
}));

let AddTodo = (props) => {
    const classes = useStyles();
    return(
        <form className={classes.form} noValidate autoComplete="off" onSubmit={data => {
                props.handleSubmit(data)
                props.reset();
            }}>
            <Field 
                name="todoText" 
                component={Input} 
                label="To Do"
                type="text" 
            />
            <Button type="submit" variant="contained" color="primary" className={classes.button}>
                Add To Do
            </Button>
        </form>
    )
}

export default reduxForm({
    form: 'newTodo'
})(AddTodo);


