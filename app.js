

// player ship class
// class myShip {
//     constructor(name, hull, firepower, accuracy) {
//         this.name = name;
//         this.hull = hull;
//         this.firepower = firepower;
//         this.accuracy = accuracy;
//     }

//     attackAlien() {
        // if alien hull is however many points, then subtract from alien hull
        // changes enemyStats on html

    //     if (Math.random() <= this.accuracy) {
    //         alienFleet[0].hull -= this.firepower;
    //         // alert("You have hit the alien ship! The alien hull is at " + alienFleet[0].hull);
    //         console.log("You have hit the alien ship!The alien hull is at " + alienFleet[0].hull);
    //     } else {
    //         // alert("You missed!")
    //         console.log("You missed!");
    //     }
    // }

    // math.random() on player ship's accuracy
    // if it is less than or equal to the accuracy, then it is a hit
    // otherwise, player misses
    // if it is a hit, then alien hull points reduce


    

//     retreat() {
//         // option to retreat
//         // then game over
//     }
// };

// create new player ship w/ specific values
// const helloWorld = new myShip("USS Schwarzenegger", 20, 5, .7)


// setting random values for alien properties
setAliens = function(min, max) {
    return Math.random() * (max - min) + min;
}

// alien ship class, calling setAliens function to sent those random values
// class alienShips {
//     constructor(hull, firepower, accuracy) {
//         this.hull = setAliens(3, 6);
//         this.firepower = setAliens(2, 4);
//         this.accuracy = setAliens(.6, .8);
//     }

//     attackPlayer() {

//         if (Math.random() <= this.accuracy) {
//             helloWorld.hull -= this.firepower;
//             alert("You have been hit!")
//             console.log("You have been hit!");
//         } else {
//             alert("The alien ship attacked and missed!")
//             console.log("The alien ship attacked and missed!");
//         }

        // if (myShip.hull > 0) {
        //     myShip.hull - this.firepower;
        // }
        // changes playerStats on html
//     }

//     // if alien hull is 0, then remove that alien from the array
//     removeAlien() {
//         if (alienShips.hull === 0) {
//             alienFleet.shift()
//         }
//     }
// }

// make an array for the messages player sees 

// alien fleet array, loops over and pushes to create new alien ship
// const alienFleet = []
// for (let i = 1; i < 6; i++) {
//     alienFleet.push(new alienShips())
// }



// prompt()


            /* You attack the first alien ship

            If the ship survives, it attacks you

            If you survive, you attack the ship again

            If it survives, it attacks you again … etc

            If you destroy the ship, you have the option to attack the next ship or to retreat

            If you retreat, the game is over, perhaps leaving the game open for further developments or options

            You win the game if you destroy all of the aliens

            You lose the game if you are destroyed */


// let options = ""
// let roundWon = "ROUND WON!"
// let gameWon = "You have destroyed all of the alien ships! YOU WON!"
// let gameLost = "GAME OVER. You lost the game!"

// let gameMessages = [gameWon, gameLost]

// setTimeout(() => {

// })

// let startPrompt = alert("Your ship is surrounded by a fleet of alien ships! Get ready!")

    // ok - lead to prompt attack alien 

// prompt to attack alien or retreat
// if yes, then attack function. if no, retreat > game over


// let playerResp = confirm("Do you want to attack the alien ship?")

// if (helloWorld.hull > 0 && alienFleet[0] > 0) {
//     if (playerResp == true){
//         console.log("You are about to attack...")
//         alert("You are about to attack...");
//         helloWorld.attackAlien(alienFleet[0]);
//     }
//     if (playerResp == false){
//         console.log("You are about to exit the game.")
//         alert("You are about to exit the game.");
//         confirm(gameMessages[1]);
//     }

// // prompts to say how many hp/hull points your ship lost
// // confirm("Your ship's hull capacity is now: ")

// // if alien ship survives, it attacks player
// if (alienFleet[0].hull > 0) {
//     alienFleet[0].attackPlayer();
// } else {
//     removeAlien();
//     confirm("Congratulations! You defeated the alien ship. On to the next!")
// }


// }


// prompt to say alien destroyed
    // option to attack next ship OR retreat
// let options = prompt("Do you want to attack the next alien ship or retreat?")

// prompt to say game won if all aliens destroyed or lost if player is destroyed
// let gameWon = prompt("You have destroyed all the alien ships! Would you like to play again?")


// if alien array is empty, game is over, player wins
// if (alienFleet.length === 0) {
//     // gameover
//     // player wins
//     confirm(gameMessages[0])
// }

// update the stats on index page












/////////////////////////////////////////////////

// settimeout w/ confirm statement to start the game
// battle function
// new battle func
    // update numbers of hulls
    // settimeout 
// function to update stats on index page

//////////////////////////////////////////////////

// grabbing playerStats and enemyStats from index to use for changing their stats as game progresses
let playerStats = document.querySelector(".playerStats")
let enemyStats = document.querySelector(".enemyStats")

let options = ""
let roundWon = "ROUND WON!"
let gameWon = "You have destroyed all of the alien ships! YOU WON!"
let gameLost = "GAME OVER. You lost the game!"

let gameMessages = [roundWon, gameWon, gameLost]


// player ship class
class myShip {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }}


let helloWorld = new myShip("USS Schwarzenegger", 20, 5, .7)



// setting random values for alien properties
setAliens = function(min, max) {
    return Math.random() * (max - min) + min;
}


// alien ship class, calling setAliens function to set those random values
class alienShips {
    constructor(hull, firepower, accuracy) {
        this.hull = setAliens(3, 6);
        this.firepower = setAliens(2, 4);
        this.accuracy = setAliens(.6, .8);
    }}

let alienShip1 = new alienShips();
let alienShip2 = new alienShips();
let alienShip3 = new alienShips();
let alienShip4 = new alienShips();
let alienShip5 = new alienShips();
let alienShips6 = new alienShips();

let alienFleet = [alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShips6]

// starting message, set delay for page to load
setTimeout(() => {
    alert("Your ship is surrounded by a fleet of alien ships! Get ready to fight!");
    startAttack();
}, '3000')


function startAttack() {

}

function newFight() {
    // edit
    // then call startAttack()
        let playerResp = confirm("Do you want to attack the alien ship?")

        if (helloWorld.hull > 0 && alienFleet[0] > 0) {
            if (playerResp == true){
                console.log("You are about to attack...")
                alert("You are about to attack...");
                helloWorld.attackAlien(alienFleet[0]);
            }
        if (playerResp == false){
            console.log("You are about to exit the game.")
            alert("You are about to exit the game.");
            confirm(gameMessages[1]);
        }

    // if alien ship survives, it attacks player
        if (alienFleet[0].hull > 0) {
            alienFleet[0].attackPlayer();
        } else {
            removeAlien();
            confirm("Congratulations! You defeated the alien ship. On to the next!")
        }
        }
    }

function attackAlien() {
    if (Math.random() <= this.accuracy) {
        alienFleet[0].hull -= this.firepower;
        alert("You have hit the alien ship! The alien hull is at " + alienFleet[0].hull);
        console.log("You have hit the alien ship!The alien hull is at " + alienFleet[0].hull);
    } else {
        alert("You missed!")
        console.log("You missed!");
    }
}

function attackPlayer() {
    if (Math.random() <= this.accuracy) {
        helloWorld.hull -= this.firepower;
        alert("You have been hit!")
        console.log("You have been hit!");
    } else {
        alert("The alien ship attacked and missed!")
        console.log("The alien ship attacked and missed!");
    }
}


// update the stats on index page

// have a timeout function with a confirm statement to start the game


//battle function
// new battle function
// attack function
// enemy attack function
//update enemy function
//update self function

//create confirms/alerts with set timeouts when html needs to update

//create ways that the functions can bounce off each other (if/else statements)