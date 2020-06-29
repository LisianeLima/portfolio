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

//object info
    const info ={
        hello: "Hello I'm",
        title: "Lisiane Lima",
        description: " Ullamco ullamco quis deserunt nisi fugiat sit consequat veniam"
    }

//function from socialmedia to add an array list of the icons
const social=[
    {link:"facebook.com/lisianelima",icon:facebook, name:"facebook"},
    {link:"github.com/lisianelima",icon:github, name:"github"},
    {link:"linkedin.com/lisianelima",icon:linkedin, name:"linkedin"},
    {link:"gmail.com/lisianelima",icon:gmail, name:"gmail"},
  ]

function Home() {
    return (
        //fragment
        <>
            <NavBar/>
            <Section height="600" background="#e5e5e5" id="home">
                <Info info={info}>
                <SocialMedia social={social}></SocialMedia>
                </Info>
                
                <InfoImg img={img}/>

            </Section> 
        </>
    );
}
export default Home;
