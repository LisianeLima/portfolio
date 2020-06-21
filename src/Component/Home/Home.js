import React from 'react';

//import needed components from the lib react-materialize
import {Row, Col, Card} from 'react-materialize';

import UserProfile from '../UserProfile/user_profile';

const Home = () => (

    <Row>
        <Col  m={6} s={6}>
            <Card>
                <div> <p><b>Hi, I AM</b></p></div>
                <h1>Lisiane Lima</h1>
            </Card>
            <h5 className='button1'>ButonTeste</h5>
            {/*Buttons*/}
            <h5 className='button2'>ButonTeste1</h5>
            {/*Buttons*/}


        </Col>
        <Col m={6} s={6}>
        {/*userProfile*/}
        <UserProfile>user ProfilleTeste</UserProfile>
        </Col>

        
    </Row>
);

export default Home;


// //criar componente Home
// export default class Home extends React.Component{
//     render(){
//         return <p>Home</p>;
//     }
// }
