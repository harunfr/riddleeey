import styled, { keyframes } from 'styled-components';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiSun } from 'react-icons/fi';
import { BsFillMoonStarsFill } from 'react-icons/bs';

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
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

export const Wrapper = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const Menu = styled(GiHamburgerMenu)`
  font-size: 1.5rem;
  cursor: pointer;
`;

export const HowTo = styled(FaRegQuestionCircle)`
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.color};
  transition: color 0.7s ease;
  &:hover {
    color: goldenrod;
  }
`;

export const Logo = styled.div`
  font-family: 'hogBoldHMK';
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

export const ButtonToDark = styled(BsFillMoonStarsFill)`
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.7s ease;
  &:hover {
    color: #5773ff;
  }
`;

export const ButtonToLight = styled(FiSun)`
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.color};
  transition: color 0.7s ease;
  &:hover {
    color: #fff;
  }
`;

export const Colorful = styled.span`
  font-family: 'hogBoldHMK';
`;
