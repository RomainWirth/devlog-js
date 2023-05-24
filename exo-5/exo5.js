// you can write js here
console.log('exo-5');

let input = "J'aime le chocolat";
let vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
let resultArray = [];

for (i = 0; i < input.length; i++) {
    console.log(input[i]);
    for (j = 0; j < vowels.length; j++) {
        if (input[i].toUpperCase() == vowels[j]) {
            resultArray.push(input[i].toUpperCase());
        }
    }
}
console.log("tableau final :",resultArray);
let arrayToString = resultArray.join('');
console.log(arrayToString);