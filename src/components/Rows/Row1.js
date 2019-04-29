import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardBackspace } from '@material-ui/icons';
import CalculatorButton from '../CalculatorButton';
import { Grid } from '@material-ui/core';
import GridContainer from '../GridContainer';


function Row1(props) {
  return (
    <Grid container spacing={8} item>
      <GridContainer>
        <CalculatorButton
          label={KeyboardBackspace}
          handleClick={() => {
            props.handleClick('ERASE')
          }}
          hasIcon
        />
        <CalculatorButton
          handleClick={() => {
            props.handleClick('CE');
          }}
          label="CE"
        />
        <CalculatorButton
          handleClick={() => {
            props.handleClick('C');
          }}
          label="C"
        />
        <CalculatorButton
          handleClick={() => {
            props.handleClick('+');
          }}
          label="+"
        />
        <CalculatorButton
          handleClick={() => {
            props.handleClick('√');
          }}
          label="√"
        />
      </GridContainer>
    </Grid>
  )
};

Row1.defaultProps = {
  handleClick: function (e) {
    console.log(e.target);
  }
}

Row1.propTypes = {
  handleClick: PropTypes.func
}


export default Row1;
