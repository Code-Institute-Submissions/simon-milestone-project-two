//Ensures the code doesn't run until after the index.html file is loaded
$(function() {
    
    //Toggle the fa chevron to up/down when each accordion button is clicked
    $(".btn-link").click(function() {
        $(this).children('.fas').toggleClass('fa-chevron-up fa-chevron-down');
    });
    
    //-----------------------------------------------------------Sound Variables
    const yellowBtnSound = new Audio("assets/sounds/yellow-btn.mp3");
    const redBtnSound = new Audio("assets/sounds/red-btn.mp3");
    const greenBtnSound = new Audio("assets/sounds/green-btn.mp3");
    const blueBtnSound = new Audio("assets/sounds/blue-btn.mp3");
    const clickOnSound = new Audio("assets/sounds/click-on.mp3");
    const clickOffSound = new Audio("assets/sounds/click-off.mp3");
    const winGameSound = new Audio("assets/sounds/win-game.mp3");
    const loseGameSound = new Audio("assets/sounds/lose-game.mp3");
    
    // //--------------------------------------------------Game button variables
    const yellowBtn = $("#yellow-btn");
    const redBtn = $("#red-btn");
    const greenBtn = $("#green-btn");
    const blueBtn = $("#blue-btn");
    const powerBtn = $("#power-btn");
    const startBtn = $("#start-btn");
    const strictBtn = $("#strict-btn");
    const roundTxt = $("#round-text");
    const roundNum = $("#round-num");
    
    //-----------------------------------------------------------------Variables
    let cpuSequence = []; //CPU sequence
    let userSequence = []; //User sequence
    let flash; //Number of flashes that appear in the game
    let round; //Determines which round/attempt we are on
    let correct; //Determines whether the player has hit the right colors or not
    let cpuTurn; //keeps track of whether it's the computer's turn or the user's turn
    let intervalId; //Determines the duration of function execution
    let strict = false; //Strict mode will be false as default
    let sound = true; //Ensures that the sound is on when the game is being played
    let power = false; //Game is off as a default so power variable is set to false
    let win; //Determines if the player has won the game or not
    
    //--------------------------------------------------------------Power Button
    $(powerBtn).click(function() {
        $(powerBtn).toggleClass("game-option-btn-on");
        if (power) {
            power = false;
            //Text changes to "ON" when the power is turned off again
            $(powerBtn).text(`ON`);
            $(roundNum).text("");
            //Deactivate the game board and disable all game buttons
            //resetColor();
            clearInterval(intervalId);
            //Sets the strict button to false if it strict mode was on during gameplay
            strict = false;
        }
        else {
            power = true;
            //Text changes to "OFF" when the power is on
            $(powerBtn).text(`OFF`);
            $(roundNum).text(`--`);
        }
        console.log("power", power);
    });
    
    //-------------------------------------------------------------Strict Button
    $(strictBtn).click(function() {
        $(strictBtn).toggleClass("game-option-btn-on");
        if (power) {
            if (strict) {
                strict = false;
            }
            else {
                strict = true;
            }
            console.log("strict", strict);
        }
    });
    
});
