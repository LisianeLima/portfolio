import React from 'react'


//import components for the home page
import NavBar from '../../components/NavBar';
import Section from '../../components/Section';
// import InfoImg from '../../components/InfoImg';
// import img from '../../assets/lisy.jpg';

function Home() {
    return (
        //fragment
        <>
            <NavBar></NavBar>
            <Section height="600" background="#e5e5e5" id="home">
            </Section>
        </>
    );
}
export default Home;
