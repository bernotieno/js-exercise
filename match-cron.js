function matchCron(cronString, date) {
    const cronParts = cronString.split(' ');
    const [minute, hour, dayOfMonth, month, dayOfWeek] = cronParts;
  
    const dateMinute = date.getMinutes();
    const dateHour = date.getHours();
    const dateDayOfMonth = date.getDate();
    const dateMonth = date.getMonth() + 1; // getMonth() returns 0-11
    const dateDayOfWeek = date.getDay() || 7; // getDay() returns 0-6, where 0 is Sunday. We convert it to 1-7 where 1 is Monday
  
    return (
      matchPart(minute, dateMinute) &&
      matchPart(hour, dateHour) &&
      matchPart(dayOfMonth, dateDayOfMonth) &&
      matchPart(month, dateMonth) &&
      matchPart(dayOfWeek, dateDayOfWeek)
    );
  }
  
  function matchPart(cronPart, datePart) {
    if (cronPart === '*') {
      return true;
    }
    return parseInt(cronPart) === datePart;
  }