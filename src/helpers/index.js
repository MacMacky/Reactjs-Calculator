import equalsLogic from "./equals";

const calculatorLogic = (symbol = '', state = { operations: [], value: '0', currentSymbol: '' }) => {
  let operations = [], value = '';
  switch (symbol) {
    case '0':
      const newValue = parseInt(state.value) === 0 ? '0' : `${state.value}0`;
      return { ...state, value: newValue };
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      return { ...state, value: `${state.value === '0' || isMathSymbol(state.currentSymbol) ? symbol : `${state.value}${symbol}`}` };;
    case 'ERASE':
      return { ...state, value: (state.value === '0' || state.value.length === 1) ? '0' : state.value.slice(0, state.value.length - 1) }
    case 'C':
      return { operations: [], value: '0' }
    case '+':
      operations = [...state.operations, state.value, '+'];
      return { ...state, operations, value: state.value, currentSymbol: symbol }
    case '=':
      operations = [...state.operations, state.value];
      value = equalsLogic({ operations }).toString();
      return { operations: [value], value };
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
