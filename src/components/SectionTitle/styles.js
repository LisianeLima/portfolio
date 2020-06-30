import styled from 'styled-components';

export const SectionTitle = styled.div`
  display:flex;
  justify-content:center;

  background:${(props)=>props.background};

  h1{
    text-transform:uppercase;
    font-size:4rem;
    font-weight:bold;
    margin:10rem 3rem;
    color:${(props)=>props.color};
  }
`;
