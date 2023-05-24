// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
let joesCarsNumbers = joeInfo.cars;
console.log("Joe a :",joesCarsNumbers.length,"voitures");

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
console.log("Joe a :",joeInfo.bathrooms,"salle de bains");

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
joeInfo.garage = true;
console.log("Joe possède un garage :",joeInfo.garage);

console.log(joeInfo);

// Suite exercice 
let team = {};
team = {
    players : [{
        firstName: "Pablo",
        lastName: "Sanchez",
        age: 11
    }],
    games: [{
        opponent: "Broncos",
        teamPoints: 42,
        opponentPoints: 27
    }],
    addPlayer: function(firstName, lastName, age) {
        this.players.push({
            firstName, 
            lastName, 
            age
        });
    },
    addGame: function(opponent, teamPoints, opponentPoints) {
        this.games.push({
            opponent,
            teamPoints,
            opponentPoints
        })
    }
};
team.addPlayer("Toto","Pimpin", 9);
team.addPlayer("Lucas", "Hoang", 22);
team.addPlayer("Ugo", "Wadoux", 24);
team.addPlayer("Ezra", "Strikwerda", 35);

team.addGame("OuiOui", 35, 50);
team.addGame("Naruto", 20, 80);
team.addGame("Luffy", 60, 40);
team.addGame("Goku", 75, 60);

console.log(team);



        // let newPlayer = {
        //     firstName: firstName,
        //     lastName: lastName,
        //     age: arguments
        // };
        // this.players.push(newPlayer);



        // team.addPlayer("Toto","Pimpin", 9);