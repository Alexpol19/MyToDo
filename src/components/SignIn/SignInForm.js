import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import {Field, reduxForm} from 'redux-form';
import { LoginCheckbox, LoginInput } from '../common/formControls';
import { requiredField, minLength, validateEmail } from '../common/validators';

const minLength8 = minLength(8);

const useStyles = makeStyles((theme) => ({
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

let SignInForm = (props) => {
  const classes = useStyles();

    return(
        <form className={classes.form} noValidate onSubmit={props.handleSubmit}>
        <Field 
            name="email"
            component={LoginInput}
            label="Email Address"
            autoComplete="email"
            autoFocus={false}
            type="email"
            required={true}
            validate={[requiredField, validateEmail]}
            margin="normal"
        />
        <Field 
            name="password"
            component={LoginInput}
            label="Password"
            autoComplete="current-password"
            autoFocus={false}
            type="password"
            required={true}
            validate={[requiredField, minLength8]}
            margin="normal"
        />
        <Field 
            name="remember"
            component={LoginCheckbox}
            label="Remember me"
            type="checkbox"
            margin="normal"
        />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
    );
}

export default reduxForm({
    form: 'signIn'
})(SignInForm);