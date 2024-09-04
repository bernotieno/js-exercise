function filter(array, base) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (base(array[i], i, array)) {
        result.push(array[i]);
      }
    }
    return result;
  }
  
  function reject(array, base) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (!base(array[i], i, array)) {
        result.push(array[i]);
      }
    }
    return result;
  }
  
  function partition(array, base) {
    const truthy = [];
    const falsy = [];
    for (let i = 0; i < array.length; i++) {
      if (base(array[i], i, array)) {
        truthy.push(array[i]);
      } else {
        falsy.push(array[i]);
      }
    }
    return [truthy, falsy];
  }