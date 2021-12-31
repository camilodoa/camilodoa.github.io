import React from 'react';
import { Switch, Route }
  from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}
