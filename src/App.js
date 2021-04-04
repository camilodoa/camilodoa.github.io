import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import LunarBabies from './pages/projects/lunarbabies/lunarbabies';

export default function App() {
  return (
    <div>
        <Header/>
          {/* <Home/> */}
          <LunarBabies/>
        <Footer/>
    </div>
  );
}
