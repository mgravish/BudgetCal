//JS is used only to generate the the calendar dates dynamically and not to create the layout or styles.

var now              = new Date();
var currentMonth     = now.getMonth()+1;
var month            = now.getMonth();
var currentYear      = now.getFullYear();
var daysInMonthCount = new Date(currentYear, currentMonth, 0).getDate();

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var currentMonthName = (monthNames[month]);

// Getting the day of the week the month starts
var firstDayOfMonth = new Date(currentYear + "-" + currentMonth + '-01').getDay();

// Creating a variable to attach the firstDayOfMonth variable to the calendar-span class that will take advantage of the flex-basis code
var calendarSpan = 'calendar-span-' + firstDayOfMonth;

// Adding the calendar header with the current month and year
var header = document.getElementById('calendar-header');
header.innerHTML = header.innerHTML + currentMonthName + " " + currentYear;

// Loop through all days in the month
for (i = 1; i <= daysInMonthCount; i++) {
  
  // Making a variable with the HTML code for all days in the month
  // I will insert the day in number to the span with class of number
    var dayCalendarBlock = '<span class="day-block">'+
                              '<span class="number">' + i + '</span>'+
                            '</span>';
    // Making a variable for the fist day day-block with the HTML code. 
    // I also have to include the calendarSpan variable that will move the day-block to the corresponding day in the calendar
    var firstDayofCalendarBlock = '<span class="day-block ' + calendarSpan + '">' +
                                    '<span class="day-block-inner">' +
                                      '<span class="number">' + i + '</span>'+
                                    '</span>' +
                                   '</span>';
  
    // Appending the firstDayOfCalendar variable to the first of the month
    if ( i === 1)  {
      var firstDayOfCalendar = document.getElementById('days-of-month');
      firstDayOfCalendar.insertAdjacentHTML('beforeend', firstDayofCalendarBlock);
    } else {
      // Appending the daysOfCalendar variable to the days of the month
      var dayOfCalendar = document.getElementById('days-of-month');
      dayOfCalendar.insertAdjacentHTML('beforeend', dayCalendarBlock);
    }
};


