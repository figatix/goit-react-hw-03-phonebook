import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 300px;

  margin-bottom: 32px;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;

  :hover input {
    border: 2px solid #9348b7;
  }
`;

const StyledInputTitle = styled.span`
  font-size: 20px;
  margin-bottom: 8px;
`;

const StyledInput = styled.input`
  height: 32px;
  padding: 4px 16px;
  font-weight: 700;
  color: #9348b7;
  border: 1px solid #6cb748;
  transition: border 250ms ease-in-out;
`;
const StyledAddBtn = styled.button`
  width: 100%;
  height: 32px;
  background-color: #9348b7;
  color: #fff;

  transition: background-color 250ms ease-in-out;

  :hover {
    background-color: #e1341e;
  }
`;

export { StyledForm, StyledLabel, StyledInputTitle, StyledInput, StyledAddBtn };
