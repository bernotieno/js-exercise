function countLeapYears(date) {
    const year = date.getFullYear();
    
    // Helper function to check if a year is a leap year
    function isLeapYear(y) {
      return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
    }
    
    // Count leap years from year 1 to the given year
    let count = 0;
    for (let y = 1; y <= year; y++) {  // Iterate up to the given year
      if (isLeapYear(y)) {
        count++;
      }
    }
    
    // Adjust for the current year only if the date is before March 1st
    if (isLeapYear(year) && date.getMonth() < 2) {
      count--;
    }
    
    return count;
  }
  