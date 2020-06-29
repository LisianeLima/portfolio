import React from 'react';

 import { Container } from './styles';
 
 import PropTypes from 'prop-types';

function InfoImg({img}) {
  return (
    <Container>
      <img src={img} alt="foto"/>
    </Container>
  );
}

//props validation
//crate object with props validation
InfoImg.propTypes={
  img:PropTypes.string.isRequired

}

export default InfoImg;