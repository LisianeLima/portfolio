import React from 'react';
import { PropTypes } from 'prop-types'

 import { Container } from './styles';


function Info({children, info, background}) {

  return(
    <Container background={background}>
      <h4>{info.hello}</h4>
      <h1>{info.title}</h1>
      <p>
      {info.description}
      </p>
      {children}
    </Container>
  );
}

Info.propTypes = {
  info:PropTypes.object,
  background:PropTypes.string,
}
export default Info;