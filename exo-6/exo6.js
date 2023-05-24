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
// console.log("Joe a :",joesCarsNumbers.length,"voitures");

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
// console.log("Joe a :",joeInfo.bathrooms,"salle de bains");

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
joeInfo.garage = true;
// console.log("Joe possède un garage :",joeInfo.garage);

// console.log(joeInfo);

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
    },
    teamPointsCalculus: function() {
        let sum = 0;
        for (i = 0; i < this.games.length; i++) {
            // console.log(this.games[i].teamPoints);
            sum += this.games[i].teamPoints;
        }
        return sum;
    },
    opponentPointsAverage: function() {
        let sum = 0;
        for (i = 0; i < this.games.length; i++) {
            // console.log(this.games[i].opponentPoints);
            sum += this.games[i].opponentPoints;
        }
        let average = sum / this.games.length;
        return average;        
    },
    mostAgedPlayer: function() {
        let ages = [];
        for (i = 0; i < this.players.length; i++) {
            ages.push(this.players[i].age);
            // console.log(typeof(ages[i]));
        }
        ages;
        // console.log(ages);

        let maximum = Math.max(...ages);
        // console.log(maximum);

        let oldestPlayer = this.players.find(player => player.age === maximum);
        // console.log(oldestPlayer);
        return oldestPlayer;
    }
};
team.addPlayer("Toto","Pimpin", 9);
team.addPlayer("Lucas", "Hoang", 22);
team.addPlayer("Ugo", "Wadoux", 24);
team.addPlayer("Ezra", "Strikwerda", 35);

team.addGame("OuiOui", 35, 35);
team.addGame("Naruto", 20, 75);
team.addGame("Luffy", 60, 35);
team.addGame("Goku", 75, 55);

// console.log(team);

let totalTeamPoints = team.teamPointsCalculus();
// console.log(totalTeamPoints);

let averageOpponentPoints = team.opponentPointsAverage();
// console.log(averageOpponentPoints);

let myVar = team.mostAgedPlayer();
console.log(myVar);