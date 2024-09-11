function replica(target, ...sources) {
    const isObject = (item) => item && typeof item === 'object' && !Array.isArray(item);
  
    const isRegExp = (item) => item instanceof RegExp;
  
    const deepCopy = (value) => {
      if (isRegExp(value)) {
        return new RegExp(value.source, value.flags);
      } else if (isObject(value)) {
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
  
    if (!isObject(target)) {
      target = {};
    }
  
    for (const source of sources) {
      if (isObject(source)) {
        for (const key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (isRegExp(source[key])) {
              target[key] = new RegExp(source[key].source, source[key].flags);
            } else if (isObject(source[key])) {
              target[key] = replica(isObject(target[key]) ? target[key] : {}, deepCopy(source[key]));
            } else if (Array.isArray(source[key])) {
              target[key] = deepCopy(source[key]);
            } else {
              target[key] = source[key];
            }
          }
        }
      }
    }
  
    return target;
  }