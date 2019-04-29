import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import CalculatorButton from '../CalculatorButton';
import GridContainer from '../GridContainer';


function Row2(props) {
  return (
    <Grid container spacing={8} item>
      <GridContainer>
        <CalculatorButton
          label="7"
          handleClick={props.handleClick}
        />
        <CalculatorButton
          handleClick={props.handleClick}
          label="8"
        />
        <CalculatorButton
          handleClick={props.handleClick}
          label="9"
        />
        <CalculatorButton
          handleClick={props.handleClick}
          label="/"
        />
        <CalculatorButton
          handleClick={props.handleClick}
          label="%"
        />
      </GridContainer>
    </Grid>
  )
};

Row2.defaultProps = {
  handleClick: function (e) {
    console.log(e.target);
  }
}

Row2.propTypes = {
  handleClick: PropTypes.func
}


export default Row2;
