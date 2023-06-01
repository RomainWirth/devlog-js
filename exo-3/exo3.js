// you can write js here
console.log('exo-3'); 

const ROCK = 'rock'; 
const PAPER = 'paper'; 
const SCISSORS = 'scissors'; 
const CHEAT = 'bomb'; 

let playerInput = prompt("Your choice (rock, paper, scissors) ?"); 
//console.log(playerInput); 
//console.log(typeof playerInput); 

const getPlayerChoice = (playerInput) => { 
    playerInput = playerInput.toLowerCase(); 
    if (playerInput == ROCK || playerInput == PAPER || playerInput == SCISSORS || playerInput == CHEAT) { 
         return playerInput; 
    } else { 
        alert("Merci d'entrer l'un des mots suivants : rock, paper ou scissors"); 
        console.log("Erreur, le champs n'a pas été saisi correcetement !"); 
        location.reload(); 
    } 
} // end function 

const getComputerChoice = () => { 
    let randomNumber = Math.floor(Math.random() * (2 - 0) + 2); 
    // console.log(randomNumber); 
    let result; 
    if (randomNumber == 0) { 
        result = ROCK; 
    } 
    if (randomNumber == 1) { 
        result = PAPER; 
    } 
    if (randomNumber == 2) { 
        result = SCISSORS; 
    } 
    // console.log(result); 
    return result; 
} // end function 

const findWinner = (playerChoice, computerChoice) => { 
    if (playerChoice == computerChoice) { 
        return 'Tied'; 
    } 
    if (playerChoice === ROCK) { 
        if (computerChoice === SCISSORS) { 
            return 'Won'; 
        } 
        return 'Lost'; 
    } 
    if (playerChoice === PAPER) { 
        if (computerChoice === ROCK) { 
            return 'Won'; 
        } 
        return 'Lost'; 
    } 
    if (playerChoice === SCISSORS) { 
        if (computerChoice === PAPER) { 
            return 'Won'; 
        } 
        return 'Lost'; 
    } 
    if (playerChoice === CHEAT) { 
        return 'Won'; 
    } 
} // end function 

const playGame = () => { 
    let uChoice = getPlayerChoice(playerInput); 
    console.log(uChoice); 
    let computerChoice = getComputerChoice(); 
    console.log(computerChoice); 
    let winner = findWinner(uChoice, computerChoice); 
    console.log(winner); 
    return winner; 
} 

playGame(); 