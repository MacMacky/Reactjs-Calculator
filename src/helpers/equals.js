import { isMathSymbol } from ".";

String.prototype.count = function (pattern) {
  if (!pattern || typeof pattern !== 'string' || this.length === 0) {
    return 0;
  } else {
    let startIndex = this.indexOf(pattern);
    if (startIndex === -1) {
      return 0;
    } else {
      let count = 0, len = this.length, checkStr = '', patLen = pattern.length;
      while (startIndex < len) {
        checkStr = this.substring(startIndex, startIndex + patLen);
        //Solution 1
        //checkStr = '';
        // for (let i = startIndex, l = startIndex + patLen; i < l; i++) {
        //   checkStr += this[i];
        // }
        if (checkStr === pattern) {
          count++
        }
        startIndex += patLen;
      }
      return count;
    }
  }
}

const equalsLogic = (state = { operations: [], value: '' }) => {
  let i = 0, ops = state.operations, len = ops.length, value = null, item = '';
  let itemBefore = '', itemAhead = '';
  while (i < len) {
    item = ops[i];
    if (isMathSymbol(item)) {
      itemAhead = ops[i + 1]; itemBefore = ops[i - 1];
      if (value !== null) {
        value = mathLogic(value, itemAhead, item);
      } else {
        if (hasPatternStr(itemBefore, '%') || hasPatternStr(itemAhead, '%')) {
          value = mathLogic(itemBefore, itemAhead, '%');
        } else {
          value = mathLogic(itemBefore, itemAhead, item);
        }
      }
      i += 2
    } else {
      i++;
    }
  }
  return value;
};


const mathLogic = (num1 = '', num2 = '', symbol) => {
  let value = 0, val1, val2;
  if (symbol === '%') {
    val1 = hasPatternStr(num1, '%') ? computePercentage(num1) : computeIntegerOrDecimal(num1);
    val2 = hasPatternStr(num2, '%') ? computePercentage(num2) : computeIntegerOrDecimal(num2);
    value = val1 * val2;
    return value;
  } else {
    val1 = computeIntegerOrDecimal(num1);
    val2 = computeIntegerOrDecimal(num2);
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
}

const computeIntegerOrDecimal = (num) => {
  return num % 1 < 1 ? parseFloat(num) : parseInt(num);
}

const computePercentage = (num = '') => {
  return (parseFloat(num) * (1 / parseInt(computeZeroes(num))));
}

const computeZeroes = (num = '') => {
  return `1${num.count('%') === 1 ? '00' : '0'.repeat(2 * num.count('%'))}`;
}

const hasPatternStr = (str = '', pattern = '') => {
  return str.indexOf(pattern) > 0;
}


export {
  mathLogic,
  computeZeroes,
  computePercentage,
  computeIntegerOrDecimal
}

export default equalsLogic;