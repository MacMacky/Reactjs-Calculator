import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '../theme';
import { Grid, MuiThemeProvider } from '@material-ui/core';

function Container(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <Grid item container
        id="app-container"
        justify="center" xs={12}>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={4} >
          <Grid item container justify="center" spacing={8}>
            {props.children}
          </Grid>
        </Grid>
        <Grid item xs={4}>

        </Grid>
      </Grid>
    </MuiThemeProvider>
  )
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}


export default Container;
