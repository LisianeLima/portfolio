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
  title:'My Projects',
  description:'Lorem impsum dolor iset Lorem impsum dolor iset Lorem impsum dolor iset Lorem impsum dolor iset Lorem impsum dolor iset Lorem impsum dolor isetLorem impsum dolor iset Lorem impsum dolor iset Lorem impsum dolor iset Lorem impsum dolor iset Lorem impsum dolor iset Lorem impsum dolor iset',
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
<Info  info={projects} background="white">
<Buttom name="more details"/>
</Info>
<Info  info={projects} background="#e5e5e5">
<Buttom name="more details"/>
</Info>
     </ProjectContainer>
    </Section>
   </>
  );
}

export default Project;