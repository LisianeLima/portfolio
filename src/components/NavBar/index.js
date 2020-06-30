import React from 'react';

//component of navbar (logo and items)
import { Container } from './styles';
import NavItem from '../NavBarItem';
import Logo from '../Logo';


//funtion to add items into array list 
function NavBar() {
    
    const links = [
        {icon:"home", link:"#home", name:'home'},
        {icon:"info", link:"#about", name:'about'},
        {icon:"folder", link:"#project", name:'project'},
        {icon:"phone", link:"#contact", name:'contact'},
      ]

      // this.state = {
      //   prevScrollpos: window.pageYOffset,
      //   visible: true
      // };

  return (
    <Container>
      
        <Logo></Logo>
      <NavItem items={links} />
    </Container>
    
  );
  }

export default NavBar;