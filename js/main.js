var now                 = new Date();
var currentMonth        = now.getMonth()+1;
var month               = now.getMonth();
var currentYear         = now.getFullYear();
var daysInMonthCount    = new Date(currentYear, currentMonth, 0).getDate();
var date                = new Date();
var monthNames          = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonthName    = (monthNames[month]);
var firstDay            = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
var lastDay             = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
var calendarSpan        = 'calendar-span-' + firstDay;
var header              = $('.calendar-header')[0];



header.innerHTML = header.innerHTML + currentMonthName + " " + currentYear;

var acct = $('.accounts')[0];
$(acct).on('click',function() {
    var target = $('#14')[0];
    
});

buildCalendar();
function buildCalendar() {
    for (i = 1; i <= 42; i++) {
        var dayCalendarBlock = '<div class="day-block" id="'+i+'" onclick="clickHandler(this);"><span class="number">'+(i-firstDay)+'</span></div>';
        var firstDayofCalendarBlock = '<span class="non-month-day day-block"></span>';
        if ( i <= firstDay || i > (firstDay+lastDay)) {
          var firstDayOfCalendar = document.getElementById('days-of-month');
          firstDayOfCalendar.insertAdjacentHTML('beforeend', firstDayofCalendarBlock);
        } else {
          var dayOfCalendar = document.getElementById('days-of-month');
          dayOfCalendar.insertAdjacentHTML('beforeend', dayCalendarBlock);
        }
    }
}

function clickHandler(a) {
    var target = a;
    var amt = Math.round((Math.random()*1000*(.5-Math.random())))/10;
    var $newDiv = $('<div class="target"><div class="target-desc">test</div><div id="val" class="target-val">$'+amt+'</div></div>');
    var val = $newDiv.find('#val')[0];
    if( amt > 0) { $(val).addClass('pos'); }
    else { $(val).addClass('neg'); }
    $newDiv.appendTo(target);
}