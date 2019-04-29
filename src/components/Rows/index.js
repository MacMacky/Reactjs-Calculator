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
import { calculatorLogic } from '../../helpers';


const CHANGE_VALUE = 'CHANGE_VALUE';

const initState = {
  operations: [],
  value: '0'
}

const reducer = (state = initState, action = { type: '', payload: '' }) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return { ...calculatorLogic(action.payload, state) }
    default:
      return state;
  }

}


function Rows(props) {

  const [state, dispatch] = useReducer(reducer, initState);


  const handleClick = (symbol) => dispatch({ type: CHANGE_VALUE, payload: symbol })

  return (
    <Card raised id="calc-card">
      <CardContent>
        <GridContainer>
          <ImgContainer />
          <Input value={state.value} />
          <Row1 handleClick={handleClick} />
          <Row2 handleClick={handleClick} />
          <Row3 handleClick={handleClick} />
          <Row4 handleClick={handleClick} />
          <Row5 handleClick={handleClick} />
        </GridContainer>
      </CardContent>
    </Card>
  )
};


export default Rows;



