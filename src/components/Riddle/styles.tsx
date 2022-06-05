import styled from 'styled-components';

export const Container = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-color: ${(props) => props.theme.color};
`;

export const Title = styled.h2`
  font-size: 1.8rem;
`;

export const TodaysRiddle = styled.div`
  font-size: 1.6rem;
  font-family: 'Times New Roman', Times, serif;
`;
