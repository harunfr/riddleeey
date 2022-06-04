import styled, { keyframes } from 'styled-components';
import { CgCloseO } from 'react-icons/cg';

import { Cell } from '../InputArea/styles';

const slideIn = keyframes`
  from{
  transform: translateY(30px);
  opacity: 0;
  }
  to{
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  position: absolute;
  inset: 0;
  z-index: 3;
  padding-top: 1rem;
  font-size: 14px;
  padding: 1rem;
  animation: ${slideIn} 100ms linear;
`;

export const ContentWrapper = styled.section`
  position: relative;
  max-width: 470px;
`;

export const CloseButton = styled(CgCloseO)`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1.5rem;
  cursor: pointer;
`;

const GenericWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LessonWrapper = styled(GenericWrapper)`
  row-gap: 10px;
`;

export const IntroWrapper = styled(GenericWrapper)`
  border-bottom: 1px solid #d2d2d2;
  row-gap: 16px;
  padding: 20px 0 16px; ;
`;

export const ExamplesWrapper = styled(GenericWrapper)`
  border-bottom: 1px solid #d2d2d2;
  row-gap: 27px;
  padding: 16px 0 25px;
`;

export const DummyCells = styled(GenericWrapper)`
  display: flex;
  flex-direction: row;
  column-gap: 4px;
`;

export const DummyCell = styled(Cell)`
  width: 40px;
  height: 40px;
  border: 2px solid #878a8c;
`;

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 7px;
  list-style: none;
`;

export const BoldText = styled.span`
  font-weight: bold;
`;

export const MainTitle = styled.h2`
  font-size: 16px;
  text-align: center;
`;

export const ExamplesTitle = styled.h3`
  font-size: 14px;
  margin-bottom: -6px;
`;

export const Strong = styled.p`
  padding-top: 16px;
`;
