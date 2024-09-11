const filterEntries = (obj, predicate) => {
    const entries = Object.entries(obj);
    const filteredEntries = entries.filter(entry => predicate(entry));
    return Object.fromEntries(filteredEntries);
  };
  
  const mapEntries = (obj, mapper) => {
    const entries = Object.entries(obj);
    const mappedEntries = entries.map(entry => mapper(entry));
    return Object.fromEntries(mappedEntries);
  };
  
  const reduceEntries = (obj, reducer, initialValue) => {
    const entries = Object.entries(obj);
    return entries.reduce((acc, entry) => reducer(acc, entry), initialValue);
  };
  
  
  const totalCalories = (cart) => {
    const total = reduceEntries(cart, (total, [item, grams]) => {
      return total + (nutritionDB[item].calories * grams / 100);
    }, 0);
    return Number(total.toFixed(1)); 
  };
  
  
  const lowCarbs = (cart) => {
    return filterEntries(cart, ([item, grams]) => {
      return (nutritionDB[item].carbs * grams / 100) < 50;
    });
  };
  
  const cartTotal = (cart) => {
    return mapEntries(cart, ([item, grams]) => {
      const itemStats = Object.entries(nutritionDB[item]).reduce((acc, [stat, value]) => {
        acc[stat] = Number((value * grams / 100).toFixed(3)); 
        return acc;
      }, {});
      return [item, itemStats];
    });
  };
//   const groceriesCart = { orange: 500, oil: 20, sugar: 480 };
  
//   console.log('Total calories:');
//   console.log(totalCalories(groceriesCart));
//   console.log('Items with low carbs:');
//   console.log(lowCarbs(groceriesCart));
//   console.log('Total cart nutritional facts:');
//   console.log(cartTotal(groceriesCart));