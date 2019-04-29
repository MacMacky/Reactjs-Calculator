import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, OutlinedInput, InputLabel } from '@material-ui/core';



function Input(props) {
  return (
    <FormControl
      fullWidth
      variant="outlined"
      id="input">
      <OutlinedInput
        labelWidth={0}
        value={props.value}
        onChange={props.handleChange}
      />
    </FormControl>
  )
};


Input.defaultProps = {
  value: "b",
  handleChange: function (e) {
    console.log(e.target.value);
  }
}


Input.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default Input;