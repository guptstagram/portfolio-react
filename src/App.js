import React from 'react';
import {BrowserRouter,Route, Switch} from "react-router-dom";
import NavComponent from './components/NavComponent/navComponent';
import HomeComponent from './components/HomeComponent/homeComponent';
import SkillsComponent from './components/SkillsComponent/skillsComponent';
import ExpComponent from './components/ExpComponent/expComponent';
import AboutComponent from './components/AboutComponent/aboutComponent';
import ConnectComponent from './components/connectComponent/connectComponent';
import NightModeComponent from './components/NightModeComponent/nightModeComponent';

const App=()=>{
  const [nightMode,setNightMode] = React.useState(false);

  const handleNightMode=()=>{
    setNightMode(!nightMode);
  }

  return(
    <BrowserRouter>
      <NavComponent nightMode={nightMode}/>
      <NightModeComponent nightMode={nightMode} handleNightMode={handleNightMode}/>
      <Switch>
        <Route exact path="/" component={()=><HomeComponent nightMode={nightMode}/>}/>
        <Route exact path="/skills" component={()=><SkillsComponent nightMode={nightMode}/>}/>
        <Route exact path="/experience" component={()=><ExpComponent nightMode={nightMode}/>}/>
        <Route exact path="/connect" component={()=><ConnectComponent nightMode={nightMode}/>}/>
        <Route exact path="/about" component={()=><AboutComponent nightMode={nightMode}/>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
