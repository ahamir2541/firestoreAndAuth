import React from 'react';
import { Switch, Route } from 'react-router-dom'
//components
import Home from './Components/Home/Home'
import SignIn from './Components/Registration/Registration'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
};

export default App;