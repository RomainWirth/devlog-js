// you can write js here
console.log('hello from file');

let kelvins = prompt("Quelle est la température en kelvins aujourd'hui ?")
// kelvins = 294;
console.log(kelvins);

// la température celcius est inférieure de 273° à la température kelvins.
// on va donc déclarer la variable celcius et lui assigner comme valeur la température kevlins - 273.
let celcius = kelvins - 273; 
console.log(celcius);

// afin de calculer la température en fahrenheits, 
// on doit effectuer l'opération arithmétique à partir de la température en celcius
// celcius x (9/5) + 32
let fahrenheits = celcius * (9/5) + 32;
console.log(fahrenheits);

// la variable suivante prend en valeur la variable fahrenheits arrondi 
let fahrenheitsRounded = Math.floor(fahrenheits);
console.log(fahrenheitsRounded); 
