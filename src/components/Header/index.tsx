import React from 'react';

import {
  Container,
  Wrapper,
  Menu,
  HowTo,
  Logo,
  Statistics,
  Settings,
} from './styles';

function Header() {
  return (
    <Container>
      <Wrapper>
        <Menu />
        <HowTo />
      </Wrapper>

      <Logo />

      <Wrapper>
        <Statistics />
        <Settings />
      </Wrapper>
    </Container>
  );
}

export default Header;
