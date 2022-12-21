import styled from 'styled-components';

export const StatusIcon = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};

  border-radius: 50%;

  margin-right: 15px;
`;

export const Container = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  min-width: 250px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  font-weight: bold;

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;
