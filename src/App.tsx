/* eslint-disable no-unused-vars */
import React from 'react';

import GlobalFonts from './fonts/fonts';
import GlobalStyle from './styles/global'; // eslint-disable-next-line
import Game from './Game/Game';

import Header from './components/Header';
import InputArea from './components/InputArea';
import Riddle from './components/Riddle';
import Keyboard from './components/Keyboard';

function App() {
  return (
    <>
      <GlobalStyle />
      <GlobalFonts />
      <Header />
      <InputArea />
      <Riddle />
      <Keyboard />
    </>
  );
}

export default App;
