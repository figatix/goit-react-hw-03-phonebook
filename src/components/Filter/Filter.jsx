
import PropTypes from "prop-types";
import React, { Component } from "react";
import { StyledFilterInput, StyledFilterInputTitle, StyledFilterLabel } from "./Filter.styled";

class Filter extends Component {

  render() {
    const { filter, onChangeFilter } = this.props

    return (
      <StyledFilterLabel>
        <StyledFilterInputTitle>Find contacts by name</StyledFilterInputTitle>
        <StyledFilterInput
          name="filter"
          value={filter}
          onChange={onChangeFilter}
          type="text"
        />
      </StyledFilterLabel>
    )
  }
}

export { Filter };

Filter.propTypes = {
  onChangeFilter: PropTypes.func,
  filter: PropTypes.string.isRequired
}
