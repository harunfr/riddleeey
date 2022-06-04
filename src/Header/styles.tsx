import styled, { keyframes } from 'styled-components';
import { FcSettings } from 'react-icons/fc';
import { BiBarChartAlt2 } from 'react-icons/bi';
import { GrCircleQuestion } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';

export const changeColor = keyframes`
  0% {
    color: #6aaa64;
  }
  80% {
    color: #c9b458;
  }
  100% {
    color: #39a2d6;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d4d1d1;
  height: 52px;
  padding: 0 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const Menu = styled(GiHamburgerMenu)`
  font-size: 1.5rem;
  cursor: pointer;
`;

export const HowTo = styled(GrCircleQuestion)`
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Logo = styled.div`
  font-family: "hogBoldHMK";
  font-size: 2rem;
  font-weight: 600;
  & > * {
    animation: ${changeColor} 5s linear infinite forwards;
  }
  & > :nth-child(1) {
    color: #6aaa64;
    animation-delay: 1.5s;
  }
  & > :nth-child(2) {
    color: #c9b458;
    animation-delay: 3s;
  }
  & > :nth-child(3) {
    color: #39a2d6;
    animation-delay: 4.5s;
  }
`;

export const Statistics = styled(BiBarChartAlt2)`
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Settings = styled(FcSettings)`
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Colorful = styled.span`
  /* color:red; */
  font-family: "hogBoldHMK";
`;
