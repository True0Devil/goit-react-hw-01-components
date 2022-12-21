import styled from 'styled-components';

export const THead = styled.th`
  background-color: #2196f3;
  padding: 20px;
  min-width: 300px;
  outline: 1px solid black;
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  text-transform: capitalize;
`;

export const Data = styled.td`
  padding: 8px 0;
  outline: 1px solid grey;

  
`;

export const Raw = styled.tr`
    :nth-child(2n) {
        background-color: #fff;
    }
`
