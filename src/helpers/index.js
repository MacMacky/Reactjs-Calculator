
function calculatorLogic(symbol = '', state = { operations: [], value: '0' }) {
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
      return { ...state, value: `${state.value === '0' ? symbol : `${state.value}${symbol}`}` };;
    case 'ERASE':
      return { ...state, value: (state.value === '0' || state.value.length === 1) ? '0' : state.value.slice(0, state.value.length - 1) }
    default:
      return { ...state, value: state.value };
  }
}




export {
  calculatorLogic
}
