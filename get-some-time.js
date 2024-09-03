function firstDayWeek(weekNumber, year) {
    let time = new Date(year);
    if (weekNumber === 1) {
        time.setHours(24);
        return formattedDate(time);
    }
    
    let addedDays = weekNumber * 7 * 24;
    time.setHours(addedDays - 123);
    
    for (let i = 0; i < 7; i++) {
        if (weekDays(time) === 'Monday') {
            return formattedDate(time);
        }
        time.setHours(-24);
    }
    return time;
}
    
function weekDays(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay() - 1];
}
  
  // Helper function to format the date as dd-mm-yyyy
  function formattedDate(date) {
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate() - 1).padStart(2, '0');
    let year = String(date.getFullYear()).padStart(4, '0');
    return `${day}-${month}-${year}`;
}