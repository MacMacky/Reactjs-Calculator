import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { computeZeroes, computePercentage, mathLogic } from './helpers/equals';

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
})