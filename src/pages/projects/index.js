import React from 'react';
import { SectionTitle } from '../../components/SectionTitle/styles';
import Section from '../../components/Section';
import Info from '../../components/Info';
import Buttom from '../../components/Buttom';
//import Card from '../../components/Card';
import ilustrator from '../../assets/ilustrador.svg'
import java from '../../assets/java.svg'
import android from '../../assets/android.svg'
//import photoshop from '../../assets/photoshop.svg'
import { ProjectContainer } from '../../components/Section/styles';

//import { Container } from './styles';

const projects ={
  title:'CV Redes',
  description:'project created in the discipline of networks with the objective of configuring and implementing network interconnection in Cape Verde using the packetTracer simulator',
  items:[
    {img:ilustrator},
    {img:java},
    {img:android},
    
  ]
}
const project1 ={
    title:'Telepone Book',
    description:'project developed in the scope of the programming discipline on mobile devices, using the android programming language that consists of a shopping list',
    items:[
      {img:ilustrator},
      {img:java},
      {img:android},
      
    ]
  }
  const project2 ={
    title:'PWeb',
    description:'Web page created in the Programming on the web discipline, using html, css and javaScript resources',
    items:[
      {img:ilustrator},
      {img:java},
      {img:android},
      
    ]
  }
function Project() {
  return (
   <>
     <SectionTitle  color="#000">
     <h1>projects</h1>
     </SectionTitle>
     <Section height="500" id="project">
     <ProjectContainer>
     <Info  info={projects} background="#e5e5e5">
     
     <Buttom name="more details"/>

    </Info>
    <Info  info={project1} background="white">
    <Buttom name="more details"/>
    </Info>
    <Info  info={project2} background="#e5e5e5">
    <Buttom name="more details"/>
    </Info>
     </ProjectContainer>
    </Section>
   </>
  );
}

export default Project;