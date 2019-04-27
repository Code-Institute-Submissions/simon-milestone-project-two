//Ensures the code doesn't run until after the index.html file is loaded
$(function () {
    
    //toggle the fa chevron to up/down when each accordion button is clicked
    $("button").click(function () {
        $(this).children('.fas').toggleClass('fa-chevron-up fa-chevron-down');
    });
    
});