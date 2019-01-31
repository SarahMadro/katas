  var talkingCalendar = function (date) {
    let newDate = new Date(date);
    let monthIndex = newDate.getMonth(); // int 0 - 11
    let months = [
      'january',
      'feburary',
      'march',
      'april',
      'may',
      'june',
      'july',
      'august',
      'septeber',
      'october',
      'november',
      'december'
    ];
    // return months[monthIndex];
    // if num ends in 1 use st, 2 ends in nd 3 ends rd everything else in th..
    let day = newDate.getDate();
    let dayString = " ";
    if (day === 1 || day === 21 || day === 31) {
      dayString = day + "st";
    } else if (day === 2 || day === 22) {
      dayString = day + "nd";
    } else if (day === 3 || day === 23) {
      dayString = day + "rd";
    } else {
      dayString = day + "th";
    }

    let monthName = months[monthIndex];
    let year = newDate.getFullYear();

    return monthName + " " + dayString + ", " + year;
  };



  console.log(talkingCalendar("2017/12/02"));
  console.log(talkingCalendar("2007/11/11"));
  console.log(talkingCalendar("1987/08/24"));

  // December 2n d, 2017
  // November 11 th, 2007
  // August 24 th, 1987