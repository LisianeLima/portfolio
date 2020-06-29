import styled, {css} from 'styled-components';


export const Container = styled.button`
background:transparent;
border-radius:3px;
border: 2px solid palevioletred;
color:palevioletred;
margin:0.5em 1em;
padding:0.25em 1em;
width:${props=>props.width}rem;
height:5rem;
cursor:pointer;
text-transform:uppercase;

${props=>props.primary && css`
background:palevioletred;
color:white;
`}
&:hover{
  background:palevioletred;
color:white;
};
`;
