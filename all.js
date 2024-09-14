function all(obj) {
    return new Promise((resolve, reject) => {
      const keys = Object.keys(obj);
      const result = {};
      let completed = 0;
  
      if (keys.length === 0) {
        resolve(result);
        return;
      }
  
      keys.forEach(key => {
        Promise.resolve(obj[key])
          .then(value => {
            result[key] = value;
            completed++;
            if (completed === keys.length) {
              resolve(result);
            }
          })
          .catch(reject);
      });
    });
  }