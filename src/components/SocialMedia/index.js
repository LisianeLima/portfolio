import React from 'react';
import {PropTypes} from 'prop-types';
import {Container} from './styles';

//function receive an object
function SocialMedia({social}){
    return(
        <Container>
            {social.map((item,index)=>{

                return(
                    <a href = {item.link} key={index}>
                        <img src={item.icon} alt={item.name} />
                    </a>
                     )
            })}
        </Container>
    )
}
SocialMedia.propTypes = {
    social:PropTypes.array.isRequired
  }
  
  export default SocialMedia;