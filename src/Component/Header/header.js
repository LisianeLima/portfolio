//create component header

//import react
import React from 'react';

//import needed components from lib react-materialize
import { Navbar, NavItem, Row} from 'react-materialize';

const Header = ()=> (
    <Row>
        <Navbar right className='grey darken'>
            <NavItem href='/'>Home</NavItem>
            <NavItem href='/about'>About Me</NavItem>
            <NavItem href='/projects'>Projects</NavItem>
            <NavItem href='/contact'>Contact</NavItem>


        </Navbar>
    </Row>
)

//export header to use into app.js
export default Header;