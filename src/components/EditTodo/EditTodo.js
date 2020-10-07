import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { fetchSaveTodo, setEditMode } from '../../redux/todos';
import EditTodoForm from './EditTodoForm';
import { getEditableTodo } from '../../redux/seletors/todos-selectors';

let EditTodo = (props) => {
  const [open, setOpen] = React.useState(false);
  if(props.editTodo === true && open != true){
    setOpen(true);
  }

  const handleClose = () => {
    props.setEditMode(null);
    setOpen(false);
  };
  const handleSave = (formData) => {
    props.fetchSaveTodo(formData.todoText)
    props.setEditMode(null);
    setOpen(false);
  };

  const initialFormVlaues = {
    'todoText': props.editable ? props.editable.text : ''
  }
  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit To Do</DialogTitle>
        <EditTodoForm {...props} initialValues={initialFormVlaues} onSubmit={handleSave} handleClose={handleClose} />
      </Dialog>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    editTodo: state.todos.editTodo,
    editable: getEditableTodo(state)
  }
}
export default connect(mapStateToProps, {setEditMode, fetchSaveTodo})(EditTodo)