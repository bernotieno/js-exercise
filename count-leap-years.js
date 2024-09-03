function countLeapYears(date) {
    const year = date.getFullYear();
    
    function isLeapYear(y) {
      if (y < 1582) {
        return y % 4 === 0;
      }
      return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
    }
    
    let count = 0;
    for (let y = 1; y < year; y++) {
      if (isLeapYear(y)) {
        count++;
      }
    }
    
    if (isLeapYear(year) && (date.getMonth() > 1 || (date.getMonth() === 1 && date.getDate() === 29))) {
      count++;
    }
    
    return count;
  }