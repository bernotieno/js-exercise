function map(array, func) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(func(array[i], i, array));
    }
    return result;
  }
  
  function flatMap(array, func) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      const mappedValue = func(array[i], i, array);
      if (Array.isArray(mappedValue)) {
        for (let j = 0; j < mappedValue.length; j++) {
          result.push(mappedValue[j]);
        }
      } else {
        result.push(mappedValue);
      }
    }
    return result;
  }
