function pick(obj, keys) {
    if (typeof keys === 'string') {
      keys = [keys];
    }
    
    return Object.fromEntries(
      Object.entries(obj).filter(([key]) => keys.includes(key))
    );
  }
  
  function omit(obj, keys) {
    if (typeof keys === 'string') {
      keys = [keys];
    }
    
    return Object.fromEntries(
      Object.entries(obj).filter(([key]) => !keys.includes(key))
    );
  }