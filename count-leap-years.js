function countLeapYears(date) {
    const year = date.getFullYear();
    
    function isLeapYear(y) {
      return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
    }
    
    let count = 0;
    for (let y = 1; y < year; y++) {
      if (isLeapYear(y)) {
        count++;
      }
    }
    
    return count;
  }