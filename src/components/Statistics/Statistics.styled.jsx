import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatList = styled.ul`
  list-style: none;

  display: flex;

  gap: 4px;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

export const StatItem = styled.li`
  background-color: ${getRandomHexColor};

  padding: 25px;
  border-radius: 4px;
  border: 1px solid black;
  flex-basis: 15%;

  font-weight: bold;
  font-size: 20px;
`;

export const Section = styled.section`
  text-align: center;
  max-width: 600px;
  margin: 50px auto 0;

  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;

  margin-top: 50px;
  padding: 30px;
  border: 3px solid ${getRandomHexColor};
  border-radius: 4px;
`;

export const Title = styled.h2`
  color: ${getRandomHexColor};
  margin-top: 0;
`;
