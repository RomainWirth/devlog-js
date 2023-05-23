// you can write js here
console.log('exo-2');

const myDate = new Date();
// console.log(myDate);

let weekDay = "Aujourd'hui est un jour de semaine";
let weekEndDay = "Ajourd'hui est un jour de week-end";

let today = myDate.getDay();
// test :
// today = 5;
today = 1;
console.log(today);

let hourNow = myDate.getHours();
// test :
// hourNow = 18;
hourNow = 7;
console.log(hourNow);

function isWeekEnd(day, hour) {
    // return day == 0 || day == 1 && hour <= 9 || day == 5 && hour >= 17 || day == 6;
    // if (day == 1 && hour > 9 || day == 2 || day == 3 || day == 4 || day == 5 && hour < 17) {
    //     console.log(weekDay);
    //     return false;
    // }
    if (day == 0 || day == 1 && hour <= 9 || day == 5 && hour >= 17 || day == 6) {
        console.log(weekEndDay);
        return true;
    }
}

let isItAWeekDay = isWeekEnd(today, hourNow);
console.log(isItAWeekDay);
