// Adder function
const adder = (arr, initialValue = 0) => {
    return arr.reduce((acc, curr) => acc + curr, initialValue);
  };
  
  // SumOrMul function
  const sumOrMul = (arr, initialValue = 1) => {
    return arr.reduce((acc, curr) => {
      return curr % 2 === 0 ? acc * curr : acc + curr;
    }, initialValue);
  };
  
  // FuncExec function
  const funcExec = (funcs, initialValue) => {
    return funcs.reduce((acc, func) => func(acc), initialValue);
  };
  