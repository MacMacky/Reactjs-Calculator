import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import GridContainer from '../GridContainer';
import CalculatorButton from '../CalculatorButton';


function Row5(props) {
  return (
    <Grid item container spacing={8}>
      <GridContainer size={6}>
        <CalculatorButton
          label="0"
          isFullWidth
          handleClick={() => {
            props.handleClick('0');
          }}
        />
        <CalculatorButton
          label="."
          isFullWidth
          handleClick={() => {
            props.handleClick('.');
          }}
        />
      </GridContainer>
    </Grid>
  )
};


Row5.defaultProps = {
  handleClick: function (e) {
    console.log(e.target);
  }
}

Row5.propTypes = {
  handleClick: PropTypes.func
}

export default Row5;
