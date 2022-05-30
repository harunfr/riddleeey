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
        <Menu>M</Menu>
        <HowTo>H</HowTo>
      </Wrapper>

      <Logo>Riddleeey</Logo>

      <Wrapper>
        <Statistics>S</Statistics>
        <Settings>G</Settings>
      </Wrapper>
    </Container>
  );
}

export default React.memo(
  Header,
  (prevProps, nextProps) => prevProps === nextProps,
);
