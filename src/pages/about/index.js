import React from 'react';
import { SectionTitle } from '../../components/SectionTitle/styles';
import Section from '../../components/Section';
import Info from '../../components/Info';
import Buttom from '../../components/Buttom';
import Card from '../../components/Card';
import ilustrator from '../../assets/html.jpg';
import java from '../../assets/java.svg';
import android from '../../assets/android.svg';
import photoshop from '../../assets/photoshop.svg';

// import { Container } from './styles';
const about ={
  hello:"",
  title:'Apresentation',
  description:'My name is Lisiane Lima and I study the 4th year of Computer Engineering at the University of Mindelo, I like to read and learn new things and technologies'
}
const skills ={
  hello:"",
  title:'My Skills',
  description:'I have skills in computer networks and network devices, Configuration and repair of computer hardware, Programming in different languages: C, Java, JavScript, Haskell and skills with different technologies',
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
        <Buttom primary name='Curriculum Vitae' width={25}/>
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