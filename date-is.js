// Check if a date is valid
function isValid(date) {
    return date instanceof Date && !isNaN(date);
  }
  
  // Check if the first date is after the second date
  function isAfter(date1, date2) {
    return isValid(date1) && isValid(date2) && date1 > date2;
  }
  
  // Check if the first date is before the second date
  function isBefore(date1, date2) {
    return isValid(date1) && isValid(date2) && date1 < date2;
  }
  
  // Check if a date is in the future
  function isFuture(date) {
    return isValid(date) && date > new Date();
  }
  
  // Check if a date is in the past
  function isPast(date) {
    return isValid(date) && date < new Date();
  }