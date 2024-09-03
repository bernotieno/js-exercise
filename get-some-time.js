function firstDayWeek(weekNumber, year) {
    // Validate input
    if (weekNumber < 1 || weekNumber > 53 || isNaN(parseInt(year))) {
      throw new Error('Invalid input. Week number should be between 1 and 53, and year should be a valid number.');
    }
  
    // Create a Date object for January 1st of the given year
    const firstDayOfYear = new Date(parseInt(year), 0, 1);
    
    const firstDayOfWeek = firstDayOfYear.getDay();
    
    // Calculate the date of the first Monday of the year
    const daysToAdd = (firstDayOfWeek === 0 ? 1 : 8 - firstDayOfWeek);
    const firstMonday = new Date(firstDayOfYear);
    firstMonday.setDate(firstMonday.getDate() + daysToAdd);
    
    // Add the necessary weeks
    const targetDate = new Date(firstMonday);
    targetDate.setDate(targetDate.getDate() + (weekNumber - 1) * 7);
    
    // If the resulting date is in the previous year, return January 1st
    if (targetDate < firstDayOfYear) {
      return formatDate(firstDayOfYear);
    }
    
    // Format and return the date
    return formatDate(targetDate);
  }
  
  // Helper function to format the date as dd-mm-yyyy
  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
  