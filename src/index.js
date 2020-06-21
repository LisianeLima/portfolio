//import react
import React from 'react';

//import react-dom to inject <APP/> into tag <div id='root'></div> from index.html
import ReactDOM from 'react-dom';

//import css
import './index.css';

//import App component
import App from './App';
//import * as serviceWorker from './serviceWorker';


//renderizando o component app em <div='root'></div> do index.html
ReactDOM.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
