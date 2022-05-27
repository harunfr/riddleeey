/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import GlobalFonts from './fonts/fonts';
import GlobalStyle, { MainWrapper } from './styles/global'; // eslint-disable-next-line

import Header from './components/Header';
import InputArea from './components/InputArea';
import Riddle from './components/Riddle';
import Keyboard from './components/Keyboard';

function App() {
  return (
    <MainWrapper>
      <GlobalStyle />
      <GlobalFonts />
      <Header />
      <InputArea />
      <Riddle />
      <Keyboard />
    </MainWrapper>
  );
}

export default App;
