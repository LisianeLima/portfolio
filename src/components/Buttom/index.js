import React from 'react';
import PropTypes from 'prop-types'
 import { Container } from './styles';

function Buttom({primary, name, width, onClick}) {
  return (
    <Container primary={primary} width={width} onClick={onClick}>
      {name}
    </Container>
  );
}

Buttom.propTypes={
  width:PropTypes.number,
  name:PropTypes.string.isRequired,
  primary:PropTypes.string,
  onClick:PropTypes.func
}

Buttom.propsDefault = {
	width:15,
}
export default Buttom;