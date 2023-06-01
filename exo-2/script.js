// you can write js here
console.log('exo-2'); 

let isTesting = false; 
console.log("init variable isTesting (booléen)", isTesting); 

const myDate = new Date(); 
console.log(myDate); 

const weekDay = "Aujourd'hui est un jour de semaine"; 
const weekEndDay = "Ajourd'hui est un jour de week-end"; 

let today; 
let hourNow; 

if (isTesting == true) { 
    today = prompt("Entrer un jour de la semaine entre 0 et 6"); 
    hourNow = prompt("Entrer un nombre entre 1 et 24"); 
} else { 
    today = myDate.getDay(); 
    hourNow = myDate.getHours();        
} 
console.log(today); 
console.log(hourNow); 


function isWeekEnd(day, hour) { 
    return day == 0 || day == 1 && hour <= 9 || day == 5 && hour >= 17 || day == 6; 
    // if (day == 1 && hour > 9 || day == 2 || day == 3 || day == 4 || day == 5 && hour < 17) { 
    //     console.log(weekDay); 
    //     return false; 
    // } 
    // if (day == 0 || day == 1 && hour <= 9 || day == 5 && hour >= 17 || day == 6) { 
    //     console.log(weekEndDay); 
    //     return true; 
    // } 
} 

let isItAWeekDay = isWeekEnd(today, hourNow); 
console.log("Est-ce le week-end ? ", isItAWeekDay); 
