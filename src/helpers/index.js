import equalsLogic, { computeIntegerOrDecimal, hasPatternStr } from "./equals";

const calculatorLogic = (symbol = '', state = { operations: [], value: '0', isMathSignClicked: false }) => {
  let operations = [], value = '', len = state.operations.length;
  switch (symbol) {
    case '0':
      const newValue = parseInt(state.value) === 0 ? '0' : `${state.value}0`;
      return { ...state, value: newValue };
    case '%':
      return { ...state, value: state.value + symbol };
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (state.value === '0') {
        operations = [...state.operations];
        value = symbol;
      } else if (state.isMathSignClicked) {
        operations = [...state.operations];
        value = symbol;
      } else if (state.value.indexOf('%') > 0) {
        operations = [...state.operations, state.value, '*'];
        value = symbol;
      }
      else {
        operations = [...state.operations];
        value = `${state.value}${symbol}`;
      }
      return { ...state, operations, value, isMathSignClicked: false };
    case 'ERASE':
      return { ...state, value: (state.value === '0' || state.value.length === 1) ? '0' : state.value.slice(0, state.value.length - 1) }
    case 'C':
      return { operations: [], value: '0' }
    case 'CE':
      return { ...state, value: '0' }
    case '√':
      return { ...state, value: state.value === '0' ? '0' : Math.sqrt(state.value).toString() }
    case '+':
    case '-':
    case '/':
    case '*':
      if (state.isMathSignClicked) {
        return state;
      }
      operations = [...state.operations, state.value, symbol];
      return { ...state, operations, value: state.value, isMathSignClicked: true }
    case '=':
      if (hasPatternStr(state.value, '0') && hasPatternStr(state.value, '%')) {
        value = '0';
        return { ...state, value };
      }
      else if (!len || (state.value === state.operations[len - 1]) || len === 1) {
        return state;
      }
      operations = [...state.operations, state.value];
      value = equalsLogic({ operations }).toString();
      return { operations: [value], value, isMathSignClicked: false };
    case '.':
      if (state.value.includes('.')) {
        return state;
      } else {
        value = `${state.value}${symbol}`;
        return { ...state, value };
      }
    case '1/x':
      value = state.value === '0' ? '0' : (1 / computeIntegerOrDecimal(state.value)).toString();
      return { ...state, value };
    default:
      return { ...state, value: state.value };
  }
}



const isNum = (char = '') => {
  return /[0-9]/.test(char);
};

const isMathSymbol = (char = '') => {
  switch (char) {
    case '+':
    case '-':
    case '/':
    case '*':
      return true;
    default:
      return false;
  }
}



export {
  isNum,
  isMathSymbol,
  calculatorLogic
}
