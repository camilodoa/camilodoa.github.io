import React from 'react';
import { Switch, Route }
  from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import LunarBabies from './pages/projects/lunarbabies/lunarbabies';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/lunarbabies">
          <LunarBabies/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}
