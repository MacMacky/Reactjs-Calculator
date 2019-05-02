import { isMathSymbol } from ".";



const equalsLogic = (state = { operations: [], value: '' }) => {
  let i = 0, ops = state.operations, len = ops.length, value = null, item = '';
  while (i < len) {
    item = ops[i];
    if (isMathSymbol(item)) {
      if (value !== null) {
        value = mathLogic(value, ops[i + 1], item);
      } else {
        value = mathLogic(ops[i - 1], ops[i + 1], item);
      }
      i += 2
    } else {
      i++;
    }
  }
  return value;
};


const mathLogic = (num1, num2, symbol) => {
  let value = 0;
  let val1 = computeIntegerOrDecimal(num1);
  let val2 = computeIntegerOrDecimal(num2);
  switch (symbol) {
    case '+':
      value = val1 + val2;
      break;
    case '-':
      value = val1 - val2;
      break;
    case '/':
      value = val1 / val2;
      break;
    case '*':
      value = val1 * val2;
      break;
    default:
      value = val1 + val2;
      break;
  }
  return value;
}

const computeIntegerOrDecimal = (num) => {
  return num % 1 < 1 ? parseFloat(num) : parseInt(num);
}


export {
  computeIntegerOrDecimal
}

export default equalsLogic;