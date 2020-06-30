import React from 'react';
import { SectionTitle } from '../../components/SectionTitle/styles';
import Section from '../../components/Section';
import Form from '../../components/Form';
import InfoImg from '../../components/InfoImg';
import img from '../../assets/map.png'
//import NavItem from '../../components/NavBarItem';

import { Container } from './styles';
// const links = [
//     {icon:"home", link:"#home", name:'home'},
//     {icon:"info", link:"#about", name:'about'},
//     {icon:"folder", link:"#project", name:'project'},
//     {icon:"phone", link:"#contact", name:'contact'},
//   ]
function Contact() {
  return (
   <>
     <SectionTitle  color="#000">
     <h1>Contact</h1>
     </SectionTitle>
     <Section height="600"  id="contact">
     <Form>
         {/* <NavItem itens={links}/> */}
     </Form>
     <Container>
     <InfoImg img={img}></InfoImg>
     </Container>
     
     </Section>
     
   </>
  );
}

export default Contact;