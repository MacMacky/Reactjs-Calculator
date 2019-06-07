import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import equalsLogic, { computeZeroes, computePercentage, mathLogic } from './helpers/equals';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Test computeZeroes func', () => {
  it('should return 100 with param 99%', () => {
    expect(computeZeroes('99%')).toBe('100');
  })
  it('should return 10000 with param 99%%', () => {
    expect(computeZeroes('99%%')).toBe('10000');
  });
  it('should return 1000000 with param 99%%%', () => {
    expect(computeZeroes('99%%%')).toBe('1000000');
  });
  it('should return 100000000 with param 99%%%%', () => {
    expect(computeZeroes('99%%%%')).toBe('100000000');
  });
});

describe('Test computePercentage func', () => {
  it('should return 0.99 with param 99%', () => {
    expect(computePercentage('99%')).toBe(0.99);
  });
  it('should return 0.0099 with param 99%%', () => {
    expect(computePercentage('99%%')).toBe(0.0099);
  });
  it('should return 0.000099 with param 99%%%', () => {
    expect(computePercentage('99%%%')).toBe(0.000099);
  });
});


describe('Test mathLogic func', () => {
  it('should return 99 with param ("99%","100")', () => {
    expect(mathLogic('99%', '100', '%')).toBe(99);
  });
  it('should return 0.9801 with param ("99%","99%")', () => {
    expect(mathLogic('99%', '99%', '%')).toBe(0.9801);
  });
  it('should return 1000 with param ("100000","1%")', () => {
    expect(mathLogic('100000', '1%', '%')).toBe(1000);
  });
  it('should return 2000 with param ("100000","2%")', () => {
    expect(mathLogic('100000', '2%', '%')).toBe(2000);
  });
  it('should return 2.5 with param ("250","1%")', () => {
    expect(mathLogic('250', '1%', '%')).toBe(2.5);
  });
  it('should return 3500 with param ("3500","1%")', () => {
    expect(mathLogic('3500', '1%', '%')).toBe(35);
  });
});

describe('Test equalsLogic func', () => {
  const state = { operations: [], value: "2" }
  beforeAll(() => {
    state.operations = ["1", "+", "2"], state.value = "2";
  })


  it('should return 3 with state =  { operations: ["1","+","3"], value: "2" }', () => {
    expect(equalsLogic(state)).toBe(3);
  });
  it('should return 1 with state =  { operations:  ["3","-","2"], value: "2" }', () => {
    state.operations = ["3", "-", "2"]
    expect(equalsLogic(state)).toBe(1);
  });

  it('should return 1 with state =  { operations:  ["3","-","2","*","3","+","5"], value: "2" }', () => {
    state.operations = ["3", "-", "2", "*", "3", "+", "5"]
    expect(equalsLogic(state)).toBe(8);
  });
  it('should return 3 with state =  { operations:  ["9","/","3"], value: "2" }', () => {
    state.operations = ["9", "/", "3"]
    expect(equalsLogic(state)).toBe(3);
  });
  it('should return 100 with state =  { operations:  ["9","+","1","*","10"], value: "2" }', () => {
    state.operations = ["9", "+", "1", "*", "10"]
    expect(equalsLogic(state)).toBe(100);
  });
  it('should return 2 with state =  { operations:  ["10","/","5"], value: "2" }', () => {
    state.operations = ["10", "/", "5"]
    expect(equalsLogic(state)).toBe(2);
  });
  it('should return 20 with state =  { operations:  ["11","+","1","/","3","*","5"], value: "2" }', () => {
    state.operations = ["11", "+", "1", "/", "3", "*", "5"]
    expect(equalsLogic(state)).toBe(20);
  });

});