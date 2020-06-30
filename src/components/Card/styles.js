import styled from 'styled-components';

export const Container = styled.div`
width:20rem;
  height:10rem;
   display: flex;
   
  cursor:pointer;
  display:flex;
  img{
    width:10rem;
    position:relative;
    margin-right:2rem;
    height:10rem;
    display: flex;
    
    /* border-radius:50%; */
    &:hover{
    opacity:0.9;
    transform:scale(1.1);
    transition:ease-in-out 0.5s;
   
  }


  }

`;
