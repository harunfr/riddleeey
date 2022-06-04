import React from 'react';

import {
  Container,
  Wrapper,
  HowTo,
  Logo,
  ButtonToDark,
  Colorful,
  ButtonToLight,
} from './styles';

interface HeaderProps {
  theme: string;
  handleShowHowToClick: () => void;
  handleToggleTheme: () => void;
}

function Header({
  theme,
  handleShowHowToClick,
  handleToggleTheme,
}: HeaderProps) {
  return (
    <Container>
      <Wrapper>
        <HowTo onClick={handleShowHowToClick} />
      </Wrapper>

      <Logo>
        Riddl
        <Colorful>e</Colorful>
        <Colorful>e</Colorful>
        <Colorful>e</Colorful>
        y
      </Logo>

      <Wrapper>
        {theme === 'light' ? (
          <ButtonToDark onClick={handleToggleTheme} />
        ) : (
          <ButtonToLight onClick={handleToggleTheme} />
        )}
      </Wrapper>
    </Container>
  );
}

export default Header;
