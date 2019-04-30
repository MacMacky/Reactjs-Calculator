import React from 'react';
import PropTypes from 'prop-types';
import CalculatorButton from '../CalculatorButton';
import { Grid } from '@material-ui/core';
import GridContainer from '../GridContainer';


function Row4(props) {
  return (
    <Grid item spacing={8} container>
      <GridContainer>
        <CalculatorButton
          label="1"
          handleClick={() => {
            props.handleClick('1');
          }}
        />
        <CalculatorButton
          handleClick={() => {
            props.handleClick('2');
          }}
          label="2"
        />
        <CalculatorButton
          handleClick={() => {
            props.handleClick('3');
          }}
          label="3"
        />
        <CalculatorButton
          handleClick={() => {
            props.handleClick('-');
          }}
          label="-"
        />
        <CalculatorButton
          handleClick={() => {
            props.handleClick('=');
          }}
          classes="text-lowercase"
          label="="
        />
      </GridContainer>
    </Grid>
  )
};

Row4.defaultProps = {
  handleClick: function (e) {
    console.log(e.target);
  }
}

Row4.propTypes = {
  handleClick: PropTypes.func
}


export default Row4;
