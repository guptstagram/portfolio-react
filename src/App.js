import React from 'react';
import {BrowserRouter,Route, Switch} from "react-router-dom";
import NavComponent from './components/NavComponent/navComponent';
import HomeComponent from './components/HomeComponent/homeComponent';
import SkillsComponent from './components/SkillsComponent/skillsComponent';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <NavComponent/>
        <Switch>
          <Route exact path="/" component={HomeComponent}/>
          <Route exact path="/skills" component={SkillsComponent}/>
          {/* <Route exact path="/experience" component={}/>
          <Route exact path="/connect" component={}/>
          <Route exact path="/about" component={}/> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
