async function series(asyncFunctions) {
    const results = [];
  
    for (const asyncFunc of asyncFunctions) {
      try {
        // Execute each function and await its result
        const result = await asyncFunc();
        results.push(result);
      } catch (error) {
        // If any function throws an error, add it to the results array
        results.push(error);
      }
    }
  
    return results;
  }