//Removed document.ready function, as the script is at the bottom of the index.html file, so it is loaded last anyway

//---------------------------------------------------------------Sound Variables
const yellowBtnSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
const redBtnSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
const greenBtnSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
const blueBtnSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
const clickOnSound = new Audio("assets/sounds/clicking-on.mp3");
const clickOffSound = new Audio("assets/sounds/clicking-off.mp3");
const winGameSound = new Audio("assets/sounds/correct.mp3");
const wrongSound = new Audio("assets/sounds/wrong.mp3");

//---------------------------------------------------------Game button variables
const volBtn = $("#volume-btn");
const yellowBtn = $("#yellow-btn");
const redBtn = $("#red-btn");
const greenBtn = $("#green-btn");
const blueBtn = $("#blue-btn");
const powerBtn = $("#power-btn");
const startBtn = $("#start-btn");
const strictBtn = $("#strict-btn");
const hardBtn = $("#hard-btn");
const roundTxt = $("#round-text");
const roundAid = $("#round-aid");

//---------------------------------------------------------------------Variables
let cpuSequence = []; //CPU sequence
let userSequence = []; //User sequence
let flash; //Number of flashes that appear in the game
let round; //Determines which round/attempt we are on
let correct; //Determines whether the player has hit the right colors or not
let cpuTurn; //keeps track of whether it's the computer's turn or the user's turn
let intervalId; //Determines the duration of function execution
let hard = false; //Hard mode will be false as default
let strict = false; //Strict mode will be false as default
let sound = true; //Ensures that the sound is on when the game is being played
let power = false; //Game is off as a default so power variable is set to false
let win; //Determines if the player has won the game or not
let strike = 0; //Determines number of strikes in the game - increments with incorrect user input - allows one mistake in normal mode
let flashSpeed = 1; //Determines the flash speed in hard mode - variable decreases as rounds progress so the time between flashes decreases

//Disables the gameboard buttons as a default
enableBoard(false);

//-----------------------------------------------------------------Volume Button

$(volBtn).click(function() {
    if (sound) {
        sound = false;
        $(this).toggleClass("fa-volume-mute");
        $(this).toggleClass("fa-volume-up");
        console.log("sound", sound);
    }
    else {
        sound = true;
        play(clickOnSound);
        $(this).toggleClass("fa-volume-mute");
        $(this).toggleClass("fa-volume-up");
        console.log("sound", sound);
    }
});

//------------------------------------------------------------------Power Button

$(powerBtn).click(function() {
    if (power) {
        power = false;
        //Text changes to "ON" when the power is turned off again
        play(clickOffSound);
        $(this).css({ "background-color": "#6b0000", "color": "#ff1810" });
        $(startBtn).text("");
        $(hardBtn).text("");
        $(strictBtn).text("");
        $(roundTxt).text("");
        $(roundAid).text("");
        //Deactivate the game board and disable all game buttons
        resetColor();
        clearInterval(intervalId);
        //Sets the strict button to false if strict mode was on during gameplay
        if (strict || hard) {
            strict = false;
            $(strictBtn).css({ "background-color": "#6b0000", "color": "#ff1810" });
            hard = false;
            $(hardBtn).css({ "background-color": "#6b0000", "color": "#ff1810" });
        }
    }
    else {
        power = true;
        //Text changes to "OFF" when the power is on
        play(clickOnSound);
        $(this).css({ "background-color": "#ff1810", "color": "#6b0000" });
        $(startBtn).text(`START`);
        $(hardBtn).text(`HARD`);
        $(strictBtn).text(`STRICT`);
        $(roundTxt).text(`ROUND --`);
        $(roundAid).text(`PRESS START`);
    }
    console.log("power", power);
});

//-------------------------------------------------------------------Hard Button

$(hardBtn).click(function() {
    if (power) {
        if (hard) {
            play(clickOffSound);
            $(this).css({ "background-color": "#6b0000", "color": "#ff1810" });
            hard = false;
        }
        else {
            play(clickOnSound);
            $(this).css({ "background-color": "#ff1810", "color": "#6b0000" });
            hard = true;
        }
        console.log("hard", hard);
    }
});

//-----------------------------------------------------------------Strict Button

$(strictBtn).click(function() {
    if (power) {
        if (strict) {
            play(clickOffSound);
            $(this).css({ "background-color": "#6b0000", "color": "#ff1810" });
            strict = false;
        }
        else {
            play(clickOnSound);
            $(this).css({ "background-color": "#ff1810", "color": "#6b0000" });
            strict = true;
        }
        console.log("strict", strict);
    }
});

//------------------------------------------------------------------Start Button

$(startBtn).click(function() {
    //This acts as a start button when the power is first turned on, or a reset button if the user is mid-game or has won
    if (power || win) {
        play(clickOnSound);
        $(this).text(`RESET`);
        $(roundTxt).text(`ROUND ${round}`);
        startGame();
    }
});

//----------------------------------------------------------------Game Functions

//Function to start the game
function startGame() {
    win = false;
    cpuSequence = [];
    intervalId = 0;
    round = 1;
    $(roundTxt).text(`ROUND ${round}`);
    correct = true;
    getNewMove();
    sharedStatements();
}

//Function to generate the random array of cpu sequences - passed into the startGame function
function getNewMove() {
    for (var i = 0; i < 20; i++) {
        let newMove = Math.floor(Math.random() * 4);
        cpuSequence.push(newMove);
        console.log(cpuSequence);
    }
}

//Function to increase the flash speed after set number of rounds - this will be used when the game is played in hard mode
function setFlashSpeed() {
    switch (round) {
        case 5:
            flashSpeed = 0.8;
            break;
        case 10:
            flashSpeed = 0.65;
            break;
        case 15:
            flashSpeed = 0.5;
            break;
    }
}

//Function that determines when it is the CPU's turn or the user's turn
function cpuAttempt() {
    enableBoard(false);

    //If the number of flashes in the round equals the round number, it will be the user's turn
    if (flash == round) {
        enableBoard(true);
        $(roundAid).text(`GO...`);
        clearInterval(intervalId);
        cpuTurn = false;
        resetColor();
        power = true;
    }

    //This if statement will run if it is the CPU's turn and there will be a gap of 300 milliseconds between each flash
    if (cpuTurn) {
        power = false;
        enableBoard(false);
        $(roundAid).text(`WATCH...`);
        resetColor();
        setTimeout(function() {
            //If the cpuSequence in the array equals 0, it will run the flashYellowBtn function
            playBtnEffects(cpuSequence[flash]);
            //Increment the flash count each time the function runs and
            flash++;
        }, 300);
    }
}

//Plays the button effect for the corresponding case number in the cpuSequence[flash] array
function playBtnEffects(id) {
    switch (id) {
        case 0:
            $(yellowBtn).addClass("lit");
            play(yellowBtnSound);
            break;
        case 1:
            $(redBtn).addClass("lit");
            play(redBtnSound);
            break;
        case 2:
            $(greenBtn).addClass("lit");
            play(greenBtnSound);
            break;
        case 3:
            $(blueBtn).addClass("lit");
            play(blueBtnSound);
            break;
    }
}

//Resets the button colors to the original colors
function resetColor() {
    $(yellowBtn).removeClass("lit");
    $(redBtn).removeClass("lit");
    $(greenBtn).removeClass("lit");
    $(blueBtn).removeClass("lit");
}

//Enable/disable gameboard buttons
function enableBoard(check) {
    if (check) {
        // activate the buttons on the gameboard
        $(yellowBtn).prop("disabled", false);
        $(redBtn).prop("disabled", false);
        $(greenBtn).prop("disabled", false);
        $(blueBtn).prop("disabled", false);
    }
    else {
        // deactivate the buttons the gameboard
        $(yellowBtn).prop("disabled", true);
        $(redBtn).prop("disabled", true);
        $(greenBtn).prop("disabled", true);
        $(blueBtn).prop("disabled", true);
    }
}


//Play sounds and light when user clicks on the buttons
$(yellowBtn).click(function() {
    addUserSequence(0);
});

$(redBtn).click(function() {
    addUserSequence(1);
});

$(greenBtn).click(function() {
    addUserSequence(2);
});

$(blueBtn).click(function() {
    addUserSequence(3);
});

//Function to play corresponding sound and light when relevant button is clicked
function addUserSequence(id) {
    if (power) {
        userSequence.push(id);
        checkUserInput();
        playBtnEffects(id);
        //Disables the gameboard buttons while the button effects are playing so the user can't press it mutliple times in a short space of time
        enableBoard(false);
        if (!win) {
            setTimeout(function() {
                resetColor();
                //Enables the gameboard buttons again after 500 milliseconds
                enableBoard(true);
            }, 300);
        }
    }
}

//Plays the sound and adds class when relevant game button is pressed
function checkUserInput() {
    //Verifies userSequence against the cpuSequence
    if (userSequence[userSequence.length - 1] !== cpuSequence[userSequence.length - 1]) {
        //Sequence is incorrect
        correct = false;
    }

    //Statement runs if userSequence is 20, which is the end of the game AND all steps are correct
    if (userSequence.length === 20 && correct) {
        enableBoard(false);
        userWin();
    }

    if (correct == false) {
        //All lights flash, loseGameSound plays and roundNum text changes to "WRONG, TRY AGAIN for 500 milliseconds, then reverts back to round number"
        enableBoard(false);
        lightAll();
        play(wrongSound);
        $(roundTxt).text(`WRONG`);
        //If the user loses the game then the text displays "YOU LOSE!"; if the user just gets their first turn incorrect in normal mode, the text displays "TRY AGAIN"
        if (strict || strike === 1) {
            $(roundAid).text(`YOU LOSE!`);
        }
        else {
            $(roundAid).text(`TRY AGAIN!`);
        }
        setTimeout(function() {
            $(roundTxt).text(`ROUND ${round}`);
            $(roundAid).text(`WATCH...`);
            resetColor();
            //If in strict mode, game restarts
            if (strict) {
                //An alert pops up to let the user know which round they reached
                alert(`You reached Round ${round}`);
                startGame();
            }
            else {
                //If not in strict mode and strike is less than 2, round is repeated; if strike is 2, the game restarts
                strike++;
                console.log(strike);
                if (strike < 2) {
                    sharedStatements();
                    correct = true;
                }
                else {
                    //An alert pops up to let the user know which round they reached
                    alert(`You reached Round ${round}`);
                    strike = 0;
                    startGame();
                }
            }
        }, 1000);
    }

    //This statement executes if the user gets the sequence correct, but hasn't won the game
    if (round == userSequence.length && correct && !win) {
        round++;
        $(roundTxt).text(`ROUND ${round}`);
        sharedStatements();
    }
}

//lightAll function will be called if user enters wrong sequence or user wins the game
function lightAll() {
    $(yellowBtn).addClass("lit");
    $(redBtn).addClass("lit");
    $(greenBtn).addClass("lit");
    $(blueBtn).addClass("lit");
}

//Function called when user wins the game
function userWin() {
    lightAll();
    play(winGameSound);
    $(startBtn).text(`START`);
    $(roundTxt).text("YOU WIN!");
    $(roundAid).text(`PRESS START`);
    win = true;
}

//Shared statements used in multiple functions
function sharedStatements() {
    cpuTurn = true;
    flash = 0;
    userSequence = [];
    if (hard) {
        //calls the setFlashSpeed function and decreases the time between flashes
        setFlashSpeed();
        intervalId = setInterval(cpuAttempt, (800 * flashSpeed));
    }
    else {
        //Ensures that the cpuAttempt function runs every 800 milliseconds in default mode
        intervalId = setInterval(cpuAttempt, 800);
    }
}

//Function to play restart sound clip if another clip is still playing
function play(soundId) {
    if (sound) {
        if (soundId.paused) {
            soundId.play();
        }
        else {
            soundId.pause();
            soundId.currentTime = 0;
        }
    }
}
