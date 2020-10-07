import React from 'react';
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
import { connect } from 'react-redux';
import { fetchLogin, setSuccessStatus } from '../../redux/auth';
import SignInForm from './SignInForm';
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

let SignIn = (props) => {
  const classes = useStyles();
  if(props.successStatus == 'success'){
    setTimeout(() => {
      props.setSuccessStatus('next');
    }, 500);
    return <Grid container justify="center" style={{ paddingTop: 100 }}><CircularProgress /></Grid>
  }
  else if(props.successStatus == 'next'){
    props.setSuccessStatus('');
    return <Redirect to='/' />
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <SignInForm onSubmit={props.fetchLogin}/>
        <Grid container justify="flex-end">
          <Grid item>
            <NavLink to="/register" className={classes.link}>
                {"Don't have an account? Sign Up"}
            </NavLink>
          </Grid>
        </Grid>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

let mapStateToProps = (state) => {
  return{
    successStatus: state.auth.successStatus
  }
}
export default connect(mapStateToProps, {fetchLogin, setSuccessStatus})(SignIn);