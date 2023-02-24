import PropTypes from "prop-types";
import React from "react";

import { StyledAddBtn, StyledContactItem } from "./ContactItem.styled";

const ContactItem = ({ personName, personNumber, id, onDeleteBtnClick }) => {
  return (
    <StyledContactItem>
      {personName}: {personNumber}
      <StyledAddBtn onClick={() => onDeleteBtnClick(id)} type="button">Delete</StyledAddBtn>
    </StyledContactItem>
  )
}

export { ContactItem };


ContactItem.propTypes = {
  onDeleteBtnClick: PropTypes.func,
  personName: PropTypes.string.isRequired,
  personNumber: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}