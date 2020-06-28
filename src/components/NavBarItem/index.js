import React from 'react';

import { Container } from './styles';
import MaterialIcon from "material-icons-react";

//navItem receive 2 parameters 
//function map 
function NavItem({items, onClick}) {
  return(
  <Container>
      {items.map((link)=>{
        return (
          <li key={link.name}>
            <a href = {link.link}
            onClick = {onClick}> <MaterialIcon icon = {link.icon }
            />{link.name}</a>
          </li>
        );
      })}

  </Container>
);
}
export default NavItem;