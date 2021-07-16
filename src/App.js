import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from './components/nav/nav.component';
import Layout from './layout/layout.component';
import Loader from './components/loader/loader.component';

const Home = React.lazy(() => import('./pages/home/home.component'));
const Expertise = React.lazy(() => import('./pages/expertise/expertise.component'));
const Experience = React.lazy(() => import('./pages/experience/experience.component'));
const Connect = React.lazy(() => import('./pages/connect/connect.component'));
const About = React.lazy(() => import('./pages/about/about.component'));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Layout>
            <React.Suspense fallback={<Loader />}>
              <Route exact path="/" component={Home} />
              <Route exact path="/expertise" component={Expertise} />
              <Route exact path="/experience" component={Experience} />
              <Route exact path="/connect" component={Connect} />
              <Route exact path="/about" component={About} />
            </React.Suspense>
          </Layout>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
