import React from 'react';
import {BrowserRouter,Route, Switch} from "react-router-dom";
import NavComponent from './components/NavComponent/navComponent';
import HomeComponent from './components/HomeComponent/homeComponent';
import SkillsComponent from './components/SkillsComponent/skillsComponent';
import ExpComponent from './components/ExpComponent/expComponent';
import AboutComponent from './components/AboutComponent/aboutComponent';
import ConnectComponent from './components/connectComponent/connectComponent';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <NavComponent/>
        <Switch>
          <Route exact path="/" component={HomeComponent}/>
          <Route exact path="/skills" component={SkillsComponent}/>
          <Route exact path="/experience" component={ExpComponent}/>
          <Route exact path="/connect" component={ConnectComponent}/>
          <Route exact path="/about" component={AboutComponent}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
