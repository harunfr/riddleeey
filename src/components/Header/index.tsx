import React from 'react';

import {
  Container,
  Wrapper,
  Menu,
  HowTo,
  Logo,
  Statistics,
  Settings,
  Colorful,
} from './styles';

function Header() {
  return (
    <Container>
      <Wrapper>
        <Menu>M</Menu>
        <HowTo>H</HowTo>
      </Wrapper>

      <Logo>
        Riddl
        <Colorful>e</Colorful>
        <Colorful>e</Colorful>
        <Colorful>e</Colorful>
        y
      </Logo>

      <Wrapper>
        <Statistics>S</Statistics>
        <Settings>G</Settings>
      </Wrapper>
    </Container>
  );
}

export default Header;
