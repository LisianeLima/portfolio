import React from 'react';

import Home from './pages/home';
import GlobalStyles from './GlobalStyles';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';


function App() {  
      return (
        <>
          <GlobalStyles/>
          <Home/>
          <About/>
          <Projects/>
          <Contact/>
       
        </>
                           
  );
}

export default App;
