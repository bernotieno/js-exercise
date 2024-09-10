const filterKeys = (obj, callback) => {
    return Object.fromEntries(
      Object.entries(obj).filter(([key]) => callback(key, obj))
    );
  };
  
  const mapKeys = (obj, callback) => {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [callback(key, obj), value])
    );
  };
  
  const reduceKeys = (obj, callback, initialValue) => {
    const keys = Object.keys(obj);
    
    if (initialValue === undefined && keys.length === 0) {
      throw new TypeError('Reduce of empty object with no initial value');
    }
    
    if (initialValue === undefined) {
      return keys.slice(1).reduce(callback, keys[0]);
    }
    
    return keys.reduce(callback, initialValue);
  };