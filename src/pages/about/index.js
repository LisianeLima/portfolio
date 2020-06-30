import React from 'react';
import { SectionTitle } from '../../components/SectionTitle/styles';
import Section from '../../components/Section';
import Info from '../../components/Info';
import Buttom from '../../components/Buttom';
import Card from '../../components/Card';
import ilustrator from '../../assets/ilustrador.svg';
import java from '../../assets/java.svg';
import android from '../../assets/android.svg';
import photoshop from '../../assets/photoshop.svg';

// import { Container } from './styles';
const about ={
  hello:"",
  title:'Lisiane Lima',
  description:'Lorem impsum dolor iset Lorem impsum dolor iset Lorem impsum dolor iset Lorem impsum dolor iset Lorem impsum dolor iset Lorem impsum dolor isetLorem impsum dolor iset Lorem impsum dolor iset Lorem impsum dolor iset Lorem impsum dolor iset Lorem impsum dolor iset Lorem impsum dolor iset'
}
const skills ={
  hello:"",
  title:'My Skills',
  description:'Lorem impsum dolor iset Lorem impsum dolor iset Lorem impsum dolor iset Lorem impsum dolor iset Lorem impsum dolor iset Lorem impsum dolor isetLorem impsum dolor iset Lorem impsum dolor iset Lorem impsum dolor iset Lorem impsum dolor iset Lorem impsum dolor iset Lorem impsum dolor iset',
  items:[
    {img:ilustrator},
    {img:java},
    {img:android},
    {img:photoshop},
  ]
}
function About() {
  return (
   <>
     <SectionTitle background="#d0c8c8" color="#000">
     <h1>about me</h1>
     </SectionTitle>
     <Section height="600" background="#d0c8c8" id="about">
     <Info info={about}>
      <div>
        <Buttom primary name='download cv' width={25}/>
      </div>
     </Info>
     <Info  info={skills} background="white">
     <Card img={skills.items}></Card>

     </Info>
    </Section>
   </>
  );
}

export default About;