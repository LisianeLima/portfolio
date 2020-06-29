import styled from 'styled-components';
/**
 * 
 */
export const Container = styled.div`

display:flex;
align-items:center;
justify-content:center;
height:${(props)=>props.height}px;
background:${(props=>props.background)};
width:100vw;


`;
/**
 * 
 */
export const ProjectContainer = styled.div`

display:flex;
align-items:center;
justify-content:center;
height:${(props)=>props.height}px;
background:${(props=>props.background)};
width:80vw;

Button{
  margin-top:3rem
}
Info{

}


`;