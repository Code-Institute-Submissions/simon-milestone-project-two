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
    

    
});