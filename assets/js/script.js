//Ensures the code doesn't run until after the index.html file is loaded
$(function () {
    
    //Toggle the fa chevron to up/down when each accordion button is clicked
    $(".btn-link").click(function() {
        $(this).children('.fas').toggleClass('fa-chevron-up fa-chevron-down');
    });
    
    //Sound Variables
    const yellowBtnSound = new Audio("assets/sounds/yellow-btn.mp3");
    const redBtnSound = new Audio("assets/sounds/red-btn.mp3");
    const greenBtnSound = new Audio("assets/sounds/green-btn.mp3");
    const blueBtnSound = new Audio("assets/sounds/blue-btn.mp3");
    const clickOnSound = new Audio("assets/sounds/click-on.mp3");
    const clickOffSound = new Audio("assets/sounds/click-off.mp3");
    const winGameSound = new Audio("assets/sounds/win-game.mp3");
    const loseGameSound = new Audio("assets/sounds/lose-game.mp3");
    
    //Game button variables
    let gameBtns = [
        "yellow-btn",
        "red-btn",
        "green-btn",
        "blue-btn"
    ];
    const powerBtn = document.getElementById("power-btn");
    const startBtn = document.getElementById("start-btn");
    const strictBtn = document.getElementById("strict-btn");
    const roundNum = document.getElementById("round-num");
    
    //Variables
    let cpuSequence = []; //CPU sequence
    let userSequence = []; //User sequence
    let round = 0; //Round number

    //User's sequence
    
    
    //CPU's sequence
    
    $(startBtn).click(function() {
        round++;
        startCpuSequence();
    });
    
    function startCpuSequence() {
        console.log(round);
        $(roundNum).text(round);
        getNewMove();
        let i = 0;
        //setInterval() method background information from w3schools.com
        let interval = setInterval(function() {
            showCpuSequence(i);
            i++;
            if (i >= cpuSequence.length) {
                clearInterval(interval);
            }
        }, 1000); //Function should execute every 1 second
    }
    
    //Generate random number - sample code from freecodecamp.org and tailored it to my requirements
    function getNewMove() {
        let newMove = Math.floor(Math.random() * 4 );
        cpuSequence.push(newMove);
    }
    
    //Show CPU sequence function, which adds class when button is lit and removes class when timeout interval is reached
    function showCpuSequence(i) {
        playSound(cpuSequence[i]);
        $("#" + gameBtns[cpuSequence[i]]).addClass("lit");
        //setTimeout() method background information from w3schools.com
        setTimeout(function() {
            $("#" + gameBtns[cpuSequence[i]]).removeClass("lit");
        }, 500);
    }
    
    //playSound function, which plays sounds that correspond to the particular button
    function playSound(button) {
        switch(button) {
            case 0:
                yellowBtnSound.play();
                break;
            case 1:
                redBtnSound.play();
                break;
            case 2:
                greenBtnSound.play();
                break;
            case 3:
                blueBtnSound.play();
                break;
        }
    }
    
    
});