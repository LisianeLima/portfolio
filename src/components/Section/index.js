import React from 'react';

import { Container } from './styles';

//funtion recive paramaters
function Section({children, id, height, background}) {
  return (
    <Container id={id} height={height} background={background}>
      {children}
    </Container>
  );
}

export default Section;