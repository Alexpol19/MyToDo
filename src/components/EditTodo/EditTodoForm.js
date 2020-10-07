import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { EditInput } from '../common/formControls';


let EditTodoForm = (props) => {
    return(
      <form onSubmit={props.handleSubmit}>
        <DialogContent>
          <Field 
                name="todoText" 
                component={EditInput} 
                label="To Do"
                type="text" 
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Save
          </Button>
        </DialogActions>
      </form>
    )
}

export default reduxForm({
    form: 'editTodo'
})(EditTodoForm);