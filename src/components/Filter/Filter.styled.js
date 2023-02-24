import styled from 'styled-components';

const StyledFilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;

  :hover input {
    border: 1px solid #9348b7;
  }
`;
const StyledFilterInputTitle = styled.span`
  font-style: italic;
  font-size: 20px;
  margin-bottom: 8px;
  text-align: center;
`;

const StyledFilterInput = styled.input`
  height: 32px;
  width: 300px;
  padding: 4px 16px;
  font-style: italic;
  font-weight: 700;
  color: #9348b7;
  border: 1px solid #6cb748;
  transition: border 250ms ease-in-out;
`;

export { StyledFilterLabel, StyledFilterInputTitle, StyledFilterInput };
