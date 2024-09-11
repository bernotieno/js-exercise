 const filterEntries = (entries, predicate) => {
    return entries.filter(entry => predicate(entry));
  };
  
  const mapEntries = (entries, mapper) => {
    return entries.map(entry => mapper(entry));
  };
  
  const reduceEntries = (entries, reducer, initialValue) => {
    return entries.reduce((acc, entry) => reducer(acc, entry), initialValue);
  };
  
  
  const totalCalories = (cart) => {
    const entries = Object.entries(cart);
    return reduceEntries(entries, (total, [item, grams]) => {
      return total + (nutritionDB[item].calories * grams / 100);
    }, 0);
  };
  
  const lowCarbs = (cart) => {
    const entries = Object.entries(cart);
    const lowCarbEntries = filterEntries(entries, ([item, grams]) => {
      return (nutritionDB[item].carbs * grams / 100) < 50;
    });
    return Object.fromEntries(lowCarbEntries);
  };
  
  const cartTotal = (cart) => {
    const entries = Object.entries(cart);
    const totalEntries = mapEntries(entries, ([item, grams]) => {
      const itemStats = Object.entries(nutritionDB[item]).reduce((acc, [stat, value]) => {
        acc[stat] = (value * grams / 100);
        return acc;
      }, {});
      return [item, itemStats];
    });
    return Object.fromEntries(totalEntries);
  };
  
//   const groceriesCart = { orange: 500, oil: 20, sugar: 480 };
  
//   console.log('Total calories:');
//   console.log(totalCalories(groceriesCart));
//   console.log('Items with low carbs:');
//   console.log(lowCarbs(groceriesCart));
//   console.log('Total cart nutritional facts:');
//   console.log(cartTotal(groceriesCart));