import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { computeZeroes, computePercentage } from './helpers/equals';

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
})