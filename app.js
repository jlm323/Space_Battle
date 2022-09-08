// prompt()


/* You attack the first alien ship

If the ship survives, it attacks you

If you survive, you attack the ship again

If it survives, it attacks you again … etc

If you destroy the ship, you have the option to attack the next ship or to retreat

If you retreat, the game is over, perhaps leaving the game open for further developments or options

You win the game if you destroy all of the aliens

You lose the game if you are destroyed */

// prompt to start game

// let startPrompt = confirm("Your ship is surrounded by a fleet of alien ships! Do you want to start the game?")
confirm("Your ship is surrounded by a fleet of alien ships! Do you want to start the game?")

    // if yes, then startgame 

// prompt to attack alien
// confirm("Do you want to attack the alien ship?")

// prompts to say how many hp/hull points your ship lost
// confirm("Your ship's hull capacity is now: ")

// prompt to say alien destroyed
    // option to attack next ship OR retreat
// let options = prompt("Do you want to attack the next alien ship or retreat?")

// prompt to say game won if all aliens destroyed or lost if player is destroyed
// let gameWon = prompt("You have destroyed all the alien ships! Would you like to play again?")

// let gameLost = prompt("You lost the game! Would you like to play again?")

// let gameMessages = []

// gameMessages.push(options, gameWon, gameLost)


// game start


// game over

// player ship class
class myShip {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    attackAlien() {
        // if alien hull is however many points, then subtract 5 from alien hull
        // if (alienShips.hull > 0 ) {
        //     alienShips.hull - 5;
        // }
        // changes enemyStats on html

        if (Math.random() <= this.accuracy) {
            alienShips.hull -= this.firepower;
            return console.log("You have hit the alien ship!");
        } else {
            return console.log("You missed!");
        }
    }

    // math.random() on player ship's accuracy
    // if it is less than or equal to the accuracy, then it is a hit
    // otherwise, player misses
    // if it is a hit, then alien hull points reduce


    

    retreat() {
        // option to retreat
        // then game over
    }
};

// create new player ship w/ specific values
const helloWorld = new myShip("USS Schwarzenegger", 20, 5, .7)


// setting random values for alien properties
setAliens = function(min, max) {
    return Math.random() * (max - min) + min;
}

// alien ship class, calling setAliens function to sent those random values
class alienShips {
    constructor(hull, firepower, accuracy) {
        this.hull = setAliens(3, 6);
        this.firepower = setAliens(2, 4);
        this.accuracy = setAliens(.6, .8);
    }

    attackPlayer() {

        if (Math.random() <= this.accuracy) {
            myShip.hull -= this.firepower;
            return console.log("You have been hit!");
        } else {
            return console.log("The alien ship attacked and missed!");
        }

        // if (myShip.hull > 0) {
        //     myShip.hull - this.firepower;
        // }
        // changes playerStats on html
    }

    // if alien hull is 0, then remove that alien from the array
    removeAlien() {
        if (alienShips.hull === 0) {
            alienFleet.pop(alienShips)
        }
    }
}

// make an array for the messages player sees 

// alien fleet array, loops over and pushes to create new alien ship
const alienFleet = []
for (let i = 1; i < 6; i++) {
    alienFleet.push(new alienShips())
}

// play, targets current alien ship from alien fleet and attacks
function play() {
    myShip.attackAlien(alienFleet[i]);
}

// if alien array is empty, game is over, player wins
if (alienFleet.length === 0) {
    // gameover
    // player wins
}

// update the stats on index page



