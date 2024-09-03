function dayOfTheYear(date) {
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    const isLeapYeah = (year% 4 === 0 && year%100 != 0) || (yeah%400 == 0);
    if (isLeapYeah) {
        monthDays[1] = 29;
    }

    let dayNumber = day;
    for (let i = 0; i < month; i++) {
        dayNumber += monthDays[i];
    }
    return dayNumber;
  }

//   const date = new Date(2024, 8, 3); // Sep 3 2024
// console.log(dayOfTheYear(date)); // Output: 247