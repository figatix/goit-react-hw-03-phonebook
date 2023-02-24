import styled from 'styled-components';

const StyledContactItem = styled.li`
  font-size: 16px;
  font-weight: 700;
  color: #ba1972;

  :nth-child(even) {
    color: #2225dd;
  }
`;

const StyledAddBtn = styled.button`
  font-size: 16px;
  height: 24px;
  padding: 0 12px;
  margin-left: 12px;
  border-radius: 10px;
  background-color: #9348b7;
  color: #fff;

  transition: background-color 250ms ease-in-out;

  :hover {
    background-color: #e1341e;
  }
`;

export { StyledContactItem, StyledAddBtn };
