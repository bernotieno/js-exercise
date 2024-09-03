function countLeapYears(date) {
    const year = date.getFullYear();
    
    // Helper function to check if a year is a leap year
    function isLeapYear(y) {
      return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
    }
    
    // Count leap years from year 1 to the year before the given date
    let count = 0;
    for (let y = 1; y < year; y++) {
      if (isLeapYear(y)) {
        count++;
      }
    }
    
    // Check if the current year is a leap year and if the date is after February 29th
    if (isLeapYear(year) && (date.getMonth() > 1 || (date.getMonth() === 1 && date.getDate() === 29))) {
      count++;
    }
    
    return count;
  }