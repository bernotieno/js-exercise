function isFriday(date) {
    if (!(date instanceof Date) || isNaN(date)) {
      throw new Error('Invalid date input');
    }
    return date.getDay() === 5; 
  }
  
  // Check if the given date is a weekend day (Saturday or Sunday)
  function isWeekend(date) {
    if (!(date instanceof Date) || isNaN(date)) {
      throw new Error('Invalid date input');
    }
    const day = date.getDay();
    return day === 0 || day === 6; 
  }
  
  // Check if the year of the given date is a leap year
  function isLeapYear(date) {
    if (!(date instanceof Date) || isNaN(date)) {
      throw new Error('Invalid date input');
    }
    const year = date.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  // Check if the given date is the last day of its month
  function isLastDayOfMonth(date) {
    if (!(date instanceof Date) || isNaN(date)) {
      throw new Error('Invalid date input');
    }
    const nextDay = new Date(date);
    nextDay.setDate(date.getDate() + 1);
    return nextDay.getMonth() !== date.getMonth();
  }