async function series(asyncFunctions) {
    const results = [];
  
    for (const asyncFunc of asyncFunctions) {
      // Execute each function and await its result
      // If any function throws, the error will propagate
      const result = await asyncFunc();
      results.push(result);
    }
  
    return results;
  }