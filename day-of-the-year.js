function dayOfTheYear(date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    
    const diff = date.getTime() - firstDayOfYear.getTime();
    
    const dayNumber = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
    
    return dayNumber;
  }

//   const date = new Date(2024, 8, 3); // Sep 3 2024
// console.log(dayOfTheYear(date)); // Output: 247