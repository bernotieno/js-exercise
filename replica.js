function replica(targetobj, ...sources) {
    const isObject = (item) => item && typeof item === 'object' && !Array.isArray(item);
  
    const deepCopy = (value) => {
      if (isObject(value)) {
        return Object.keys(value).reduce((acc, key) => {
          acc[key] = deepCopy(value[key]);
          return acc;
        }, {});
      } else if (Array.isArray(value)) {
        return value.map(deepCopy);
      } else {
        return value;
      }
    };
  
    if (!isObject(targetobj)) {
      targetobj = {};
    }
  
    for (const source of sources) {
      if (isObject(source)) {
        for (const key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (isObject(source[key])) {
              targetobj[key] = replica(isObject(targetobj[key]) ? targetobj[key] : {}, deepCopy(source[key]));
            } else if (Array.isArray(source[key])) {
              targetobj[key] = deepCopy(source[key]);
            } else {
              targetobj[key] = source[key];
            }
          }
        }
      }
    }
  
    return targetobj;
  }