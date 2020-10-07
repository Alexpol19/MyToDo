import React from 'react';
import { AppBar, Button, Container, makeStyles, Toolbar, Typography } from '@material-ui/core';
import Search from '../Search/Search';

const useStyles = makeStyles((theme) => ({
    header: {
        flexGrow: 1,
        marginBottom: theme.spacing(5),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    logoutButton: {
        marginLeft: theme.spacing(2),
    },
  }));
  

let Header = (props) => {
    const classes = useStyles();
    return(
        <div className={classes.header}>
            <AppBar position="static">
                <Container maxWidth="md">
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" noWrap>
                            My ToDo
                        </Typography>
                        <Search onSubmit={props.search} />
                        <Button color="inherit" onClick={() => props.logout()} className={classes.logoutButton} >
                            Logout
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default Header;