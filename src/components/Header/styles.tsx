import styled from 'styled-components';

import { FcSettings } from 'react-icons/fc';
import { BiBarChartAlt2 } from 'react-icons/bi';
import { GrCircleQuestion } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';

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
  font-family: 'hogBoldHMK';
  font-size: 2rem;
  font-weight: 600;
`;

export const Statistics = styled(BiBarChartAlt2)`
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Settings = styled(FcSettings)`
  font-size: 1.5rem;
  cursor: pointer;
`;
