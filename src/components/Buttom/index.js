import React from 'react';
import PropTypes from 'prop-types'
 import { Container } from './styles';

function Buttom({primary, name, width }) {
  return (
    <Container primary={primary} width={width}>
      {name}
    </Container>
  );
}

Buttom.propTypes={
  width:PropTypes.number,
  name:PropTypes.string.isRequired,
  primary:PropTypes.string,
}

Buttom.propsDefault = {
	width:15,
}
export default Buttom;