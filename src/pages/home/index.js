import React from 'react'


//import components for the home page
import NavBar from '../../components/NavBar';
import Section from '../../components/Section';
import InfoImg from '../../components/InfoImg';
import img from '../../assets/lisy.jpg';
import Info from '../../components/Info';
import facebook from '../../assets/facebook.svg'
import github from '../../assets/imagem-do-github.svg'
import linkedin from '../../assets/linkedin.svg'
import gmail from '../../assets/gmail.svg'
import SocialMedia from '../../components/SocialMedia';
import Buttom from '../../components/Buttom';

//object info
    const info ={
        hello: "Hello I'm",
        title: "Lisiane Lima",
        description: "Computer Engineering student at University of Mindelo"
    }

//function from socialmedia to add an array list of the icons
const social=[
    {link:"https://www.facebook.com/lisy.lima.146",icon:facebook, name:"facebook"},
    {link:"https://github.com/LisianeLima",icon:github, name:"github"},
    {link:"https://www.linkedin.com/in/lisiane-lima-506b161ab/",icon:linkedin, name:"linkedin"},
    {link:"gmail.com/lisianelima",icon:gmail, name:"gmail"},
  ]

function Home() {
    return (
        //fragment
        <>
            <NavBar/>
            <Section height="600" background="#e5e5e5" id="home">
                <Info info={info}>
                <div>
                    <Buttom primary name="My Works" width={20}/>
                    <Buttom name="About Me" width={20}/>
                </div>
                <SocialMedia social={social}></SocialMedia>
                </Info>
                
                <InfoImg img={img}/>

            </Section> 
        </>
    );
}
export default Home;
