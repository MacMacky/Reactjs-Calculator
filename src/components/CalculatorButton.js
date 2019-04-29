import React from 'react';
import { Button, Fab } from '@material-ui/core';
import PropTypes from 'prop-types';

function CalculatorButton(props) {
  if (!props.hasIcon) {
    return (
      <Button
        fullWidth={props.isFullWidth}
        onClick={props.handleClick}
        color={props.color}
        className={`calculator-button ${props.classes}`}
        variant="contained">
        {props.label}
      </Button>
    )
  } else {
    return (
      <Fab
        onClick={props.handleClick}
        className="fab"
        color={props.color}
        variant="extended"
      >
        <props.label />
      </Fab>
    )
  }
};

CalculatorButton.defaultProps = {
  color: "primary",
  isFullWidth: false,
  hasIcon: false,
  classes: ""
}


CalculatorButton.propTypes = {
  color: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]).isRequired,
  handleClick: PropTypes.func,
  isFullWidth: PropTypes.bool,
  hasIcon: PropTypes.bool,
  classes: PropTypes.string
}

export default CalculatorButton;