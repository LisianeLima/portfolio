import React from 'react';
import { Container } from './styles';


//function to add image
function Card({img}) {
  return (
    <Container>
   {
     img.map(item=>{
       return(
        <>
        <img src={item.img} alt='foto'/>

        </>
       );
     })
   }
    </Container>
  );
}         

export default Card;