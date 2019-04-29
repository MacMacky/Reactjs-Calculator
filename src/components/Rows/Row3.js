import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import CalculatorButton from '../CalculatorButton';
import GridContainer from '../GridContainer';


function Row3(props) {
  return (
    <Grid item spacing={8} container>
      <GridContainer>
        <CalculatorButton
          label="4"
          handleClick={props.handleClick}
        />
        <CalculatorButton
          handleClick={props.handleClick}
          label="5"
        />
        <CalculatorButton
          handleClick={props.handleClick}
          label="6"
        />
        <CalculatorButton
          handleClick={props.handleClick}
          label="*"
        />
        <CalculatorButton
          handleClick={props.handleClick}
          classes="text-lowercase"
          label="1/x"
        />
      </GridContainer>
    </Grid>
  )
};

Row3.defaultProps = {
  handleClick: function (e) {
    console.log(e.target);
  }
}

Row3.propTypes = {
  handleClick: PropTypes.func
}


export default Row3;
