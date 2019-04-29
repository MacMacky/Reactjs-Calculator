import React, { useReducer } from 'react';
import { Card, CardContent } from '@material-ui/core';
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
import Row4 from './Row4';
import GridContainer from '../GridContainer';
import Input from '../Input';
import ImgContainer from '../ImgContainer';
import Row5 from './Row5';


const initState = {

}

const reducer = (state = initState, action) => {

  return state;
}


function Rows(props) {

  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <Card raised id="calc-card">
      <CardContent>
        <GridContainer>
          <ImgContainer />
          <Input />
          <Row1 />
          <Row2 />
          <Row3 />
          <Row4 />
          <Row5 />
        </GridContainer>
      </CardContent>
    </Card>
  )
};


export default Rows;



