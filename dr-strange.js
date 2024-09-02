function addWeek(date) {
    const weekdays = [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
      'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'
    ];
    const epochDate = new Date('0001-01-01');
    const daysDiff = Math.floor((date - epochDate) / (1000 * 60 * 60 * 24));
    return weekdays[daysDiff % 14];
  }
  
  function timeTravel(options) {
    const { date, hour, minute, second } = options;
    const newDate = new Date(date);
    newDate.setHours(hour);
    newDate.setMinutes(minute);
    newDate.setSeconds(second);
    return newDate;
  }