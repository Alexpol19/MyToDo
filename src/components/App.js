import React from 'react';
import { Provider } from 'react-redux';
import '../assets/App.sass';
import store from '../redux/store';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import EditTodo from './EditTodo/EditTodo';
import Main from './Main/Main';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

function App() {
  
  return (
    <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <Switch >
              <Route exact path="/login" render={ () => <SignIn />} />
              <Route exact path="/register" render={ () => <SignUp />} />
              <Route path="/:page?" render={ () => <Main /> }
                              />
            </Switch>
            <EditTodo />
          </div>
        </Provider>
    </BrowserRouter>
    
  );
}

export default App;
