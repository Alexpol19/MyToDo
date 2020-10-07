import React from 'react';
import { Button, Grid, makeStyles } from '@material-ui/core';
import {Field, reduxForm} from 'redux-form';
import { LoginInput, LoginSelect } from '../common/formControls';
import { requiredField, minLength, validateEmail, validatePhoneNumber } from '../common/validators';

const minLength8 = minLength(8);

const useStyles = makeStyles((theme) => ({
    form: {
      width: '100%', 
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

let SignUpForm = (props) => {
  const classes = useStyles();
  return(
        <form className={classes.form} noValidate onSubmit={props.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Field 
                  name="firstName"
                  component={LoginInput}
                  label="First Name"
                  autoComplete="fname"
                  autoFocus={false}
                  type="text"
                  required={true}
                  validate={[requiredField]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field 
                  name="lastName"
                  component={LoginInput}
                  label="Last Name"
                  autoComplete="lname"
                  autoFocus={false}
                  type="text"
                  required={true}
                  validate={[requiredField]}
              />
            </Grid>
            <Grid item xs={12}>
              <Field 
                  name="email"
                  component={LoginInput}
                  label="Email Address"
                  autoComplete="email"
                  autoFocus={false}
                  type="email"
                  required={true}
                  validate={[requiredField, validateEmail]}
              />
              </Grid>
              <Grid item xs={12}>
                <Field 
                    name="password"
                    component={LoginInput}
                    label="Password"
                    autoComplete="current-password"
                    autoFocus={false}
                    type="password"
                    required={true}
                    validate={[requiredField, minLength8]}
                />
              </Grid>
              <Grid item xs={12}>
                <Field 
                    name="phoneNumber"
                    component={LoginInput}
                    label="Your phone"
                    autoComplete="phoneNumber"
                    autoFocus={false}
                    type="text"
                    validate={[minLength8, validatePhoneNumber]}
                />
              </Grid>
              <Grid item xs={12}>
                <Field 
                    name="country"
                    component={LoginSelect}
                    label="Select country"
                    countries={props.countries}
                    type="text"
                />
              </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
            </Button>
        </form>
  );
}

export default reduxForm({
    form: 'signUp'
})(SignUpForm);