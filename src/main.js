//create basic layout for page e incluir no app.js a chamada do main.js
//import react
import React from 'react';

//import Home component
import Home from './Component/Home/Home';

//import needed components from the lib react-materialize
import { Container } from 'react-materialize';

const Main =() => (
    <main>
        <Container>
            <Home></Home>
        </Container>
    </main>
);

export default Main;