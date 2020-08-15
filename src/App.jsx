import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';

export default function App() {
  return (
    <div>
        <Header/>
          <Home/>
        <Footer/>
    </div>
  );
}
