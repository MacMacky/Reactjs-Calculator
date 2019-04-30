import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import GridContainer from '../GridContainer';
import CalculatorButton from '../CalculatorButton';


function Row3(props) {
  return (
    <Grid item spacing={8} container>
      <GridContainer>
        <CalculatorButton
          label="4"
          handleClick={() => {
            props.handleClick('4');
          }}
        />
        <CalculatorButton
          handleClick={() => {
            props.handleClick('5');
          }}
          label="5"
        />
        <CalculatorButton
          handleClick={() => {
            props.handleClick('6');
          }}
          label="6"
        />
        <CalculatorButton
          handleClick={() => {
            props.handleClick('*');
          }}
          label="*"
        />
        <CalculatorButton
          handleClick={() => {
            props.handleClick('1/x');
          }}
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
