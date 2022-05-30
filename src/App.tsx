/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import GlobalFonts from './fonts/fonts';
import GlobalStyle, { MainWrapper } from './styles/global'; // eslint-disable-next-line

import Header from './components/Header';
import InputArea from './components/InputArea';
import Riddle from './components/Riddle';
import Keyboard from './components/Keyboard';

function App() {
  const [riddle, setRiddle] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    const riddlesSourceURL =
      'https://riddleeey-8000.herokuapp.com/api/v1/riddles/random';

    const fetchRiddle = async () => {
      const response = await fetch(riddlesSourceURL);
      const fetchedRiddle = await response.json();
      setRiddle(fetchedRiddle[0].body);
      setAnswer(fetchedRiddle[0].answer);

      // console.log(fetchedRiddle[0]);
    };
    fetchRiddle();
  }, []);

  return (
    <MainWrapper>
      <GlobalStyle />
      <GlobalFonts />
      <Header />
      <InputArea answer={answer} />
      <Riddle riddle={riddle} />
      <Keyboard />
    </MainWrapper>
  );
}

export default App;
