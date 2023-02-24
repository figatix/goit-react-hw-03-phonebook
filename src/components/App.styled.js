

import styled from 'styled-components'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  padding: 30px 0;
  max-width:700px;
  margin: 0 auto;
`;

const StyledMainTitle = styled.h1`
  font-size: 32px;
  color: #E1341E;
  margin-bottom: 16px;
`;
const StyledTitle = styled.h2`
  font-size: 24px;
  color: #9348B7;
  margin-bottom: 12px;
`;

export { Wrapper, StyledMainTitle, StyledTitle };