const longWords = (arr) => {
    return arr.every(element => typeof element === 'string' && element.length >= 5);
  };
  
  // Function to check if at least one element is a string with 10 or more characters
  const oneLongWord = (arr) => {
    return arr.some(element => typeof element === 'string' && element.length >= 10);
  };
  
  const noLongWords = (arr) => {
    return !arr.some(element => typeof element === 'string' && element.length >= 7);
  };
  