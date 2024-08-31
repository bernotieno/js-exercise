function flat(array, depth = 1) {
    const result = [];
  
    function flatten(arr, d) {
      for (let item of arr) {
        if (Array.isArray(item) && d > 0) {
          flatten(item, d - 1);
        } else {
          result.push(item);
        }
      }
    }
  
    flatten(array, depth);
    return result;
  }
  