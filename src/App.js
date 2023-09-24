import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ChatPage from './Chatpage';
import LandingPage from './LandingPage'; 
import AuthenticationPage from './AuthenticationPage';
import LoginPage from './LoginPage'; 
import SignUpPage from './SignUpPage'; 

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/authentication" component={AuthenticationPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/chat" component={ChatPage} />
      </Switch>
    </Router>
  );
};

export default App;
