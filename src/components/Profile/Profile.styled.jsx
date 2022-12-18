import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;

  text-align: center;

  max-width: 280px;
  margin: 40px auto 0;
  padding-top: 25px;
  background-color: #fff;

  display: flex;
  flex-direction: column;

  border: 3px solid #000;
  border-radius: 6px;
`;

export const ProfileImg = styled.img`
  display: block;
  width: 120px;
  border-radius: 50%;
  border: 2px solid #000;

  margin-bottom: 25px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileName = styled.p`
  margin: 5px 0;
`;

export const ProfileInfo = styled.p`
  color: gray;

  margin: 5px 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Stats = styled.ul`
  display: flex;
  // justify-content: space-around;

  list-style: none;
  padding: 0;
  margin-bottom: 0;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;

  padding: 10px 23px;

  border-top: 1px solid black;

  &:not(:last-child) {
    border-right: 1px solid black;
  }
`;

export const StatsLabel = styled.span`
  font-size: 16px;
  color: gray;
`;
