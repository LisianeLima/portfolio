import styled from 'styled-components';

export const Container = styled.div`
  width:60rem;
  margin:5rem;
  background:${(props)=>props.background};
  padding:5rem;
  border-radius:2rem;

  h4{
    font-size:3rem;
    /* margin-top:15rem */
  }

  h1{
     font-size:5rem;

  }
  p{
    font-size:1.5rem;
    margin-top:2rem;
  }

  div{
    margin-top:5rem;
  }


`;
