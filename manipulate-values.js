const filterValues = (obj, callback) => {
    return Object.fromEntries(
      Object.entries(obj).filter(([key, value]) => callback(value, key, obj))
    );
  };
  
  const mapValues = (obj, callback) => {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [key, callback(value, key, obj)])
    );
  };
  
  const reduceValues = (obj, callback, initialValue) => {
    const values = Object.values(obj);
    
    if (initialValue === undefined && values.length === 0) {
      throw new TypeError('Reduce of empty object with no initial value');
    }
    
    if (initialValue === undefined) {
      return values.slice(1).reduce(callback, values[0]);
    }
    
    return values.reduce(callback, initialValue);
  };

  // const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

  // console.log(filterValues(nutrients, (nutrient) => nutrient <= 12))
  // // output: { carbohydrates: 12, fat: 5 }
  
  // console.log(mapValues(nutrients, (v) => v+1))
  // // output: { carbohydrates: 13, protein: 21, fat: 6 }
  
  // console.log(reduceValues(nutrients, (acc, cr) => acc + cr))
  // // output: 37