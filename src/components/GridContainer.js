import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

function GridContainer(props) {
  if (!props.children.length) {
    return "";
  } else if (props.children.length === 1) {
    return (
      <Grid item>
        {props.children}
      </Grid>
    )
  } else {
    return (props.children.map((child, i) =>
      <Grid item key={i} xs={props.size && props.size}>
        {child}
      </Grid>
    ))
  }
};

GridContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  size: PropTypes.number
}


export default GridContainer;


