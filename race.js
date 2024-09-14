function race(promises) {
    return new Promise((resolve, reject) => {
      if (promises.length === 0) {
        return;
      }
      promises.forEach(promise => {
        Promise.resolve(promise).then(resolve, reject);
      });
    });
  }
  
  function some(promises, count) {
    return new Promise((resolve) => {
      if (promises.length === 0) {
        resolve([]);
        return;
      }
  
      if (count === 0) {
        resolve([]);
        return;
      }
  
      const results = new Array(promises.length); // Ensure order is preserved
      let resolved = 0;
      let completed = 0;
  
      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then(value => {
            if (resolved < count) {
              results[index] = value; // Fill results in the same order as promises
              resolved++;
              if (resolved === count) {
                resolve(results.filter(result => result !== undefined)); // Only return the needed results
              }
            }
            completed++;
            if (completed === promises.length && resolved < count) {
              resolve(results.filter(result => result !== undefined)); // Ensure we resolve with what we have
            }
          })
          .catch(() => {
            completed++;
            if (completed === promises.length && resolved < count) {
              resolve(results.filter(result => result !== undefined));
            }
          });
      });
    });
  }
  