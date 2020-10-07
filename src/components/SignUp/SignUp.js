import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../common/Copyright';
import { NavLink, Redirect } from 'react-router-dom';
import { fetchRegistration, setSuccessStatus } from '../../redux/auth';
import { connect } from 'react-redux';
import SignUpForm from './SignUpForm';
import { fetchCountries } from '../../redux/countries';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  link: {
    textDecoration: 'none',
    color: '#3f51b5',
    fontSize: '0.875rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: '400',
    lineHeight: '1.43',
    letterSpacing: '0.01071em',
    "&:hover": {
      textDecoration: 'underline',
    }
  },
}));

let SignUp = (props) => {
  const classes = useStyles();
  useEffect(() => {
    props.fetchCountries()
  })
  
  if(props.successStatus == 'success'){
    setTimeout(() => {
      props.setSuccessStatus('next');
    }, 500);
    return <Grid container justify="center" style={{ paddingTop: 100 }}><CircularProgress /></Grid>
    
  }
  else if(props.successStatus == 'next'){
    props.setSuccessStatus('');
    return <Redirect to='/login' />
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <SignUpForm countries={props.countries} onSubmit={props.fetchRegistration}/>
        <Grid container justify="flex-end">
          <Grid item>
            <NavLink to="/login" className={classes.link}>
              Already have an account? Sign in
            </NavLink>
          </Grid>
        </Grid>
        
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

let mapStateToProps = (state) => {
  return{
    successStatus: state.auth.successStatus,
    countries: state.countries.items
  }
}
export default connect(mapStateToProps, {fetchRegistration, setSuccessStatus, fetchCountries})(SignUp)