import React from 'react';
import {BrowserRouter,Route, Switch} from "react-router-dom";
import NavComponent from './components/NavComponent/navComponent';
import HomeComponent from './components/HomeComponent/homeComponent';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <NavComponent/>
        <Switch>
          <Route exact path="/" component={HomeComponent}/>
          {/* <Route exact path="/" component={}/>
          <Route exact path="/" component={}/>
          <Route exact path="/" component={}/>
          <Route exact path="/" component={}/> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
