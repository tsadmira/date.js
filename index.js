const arrDay = [
    'Su',
    'Mo',
    'Tu',
    'We',
    'Th',
    'Fr',
    'Sa',
]

const arrMonth =[ 
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]
const elements = {
    day : document.querySelector('.date-day'),
    date :  document.querySelector('.date'),
    month :  document.querySelector('.date-month'),
    year : document.querySelector('.date-year'),
    digistalClock : document.querySelector('.digistal-clock'),
    secondsArrow : document.querySelector('.clock-seconds'),
    minutesArrow : document.querySelector('.clock-minutes'),
    hoursArrow : document.querySelector('.clock-hours'),
}
setInterval(() => {
    const currentTime = new Date();

    const current = {
        day : arrDay[currentTime.getDay()],
        date : currentTime.getDate(),
        month : arrMonth[currentTime.getMonth()],
        year : currentTime.getFullYear(),
        hours : currentTime.getHours(),
        minutes: currentTime.getMinutes(),
        seconds : currentTime.getSeconds()
    }

    elements.day.textContent = current.day;
    elements.date.textContent = current.date;
    elements.month.textContent = current.month;
    elements.year.textContent = current.year;
    elements.digistalClock.textContent = `${atZeroToTime(current.hours)}:${atZeroToTime(current.minutes)}:${atZeroToTime(current.seconds)}`;

    // Change arrow in degrees
    elements.secondsArrow.style.transform = `rotate(${360 / 60 * current.seconds}deg)`;
    elements.minutesArrow.style.transform = `rotate(${360 / 60 * current.minutes}deg)`;
    elements.hoursArrow.style.transform = `rotate(${(360 / 12 * current.hours) + (30 / 60 * current.minutes)}deg)`;


}, 1000)

function atZeroToTime (value) {
    return value.toString().padStart(2, '0')
}