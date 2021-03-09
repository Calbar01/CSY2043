//NOTE: CHECK PUSHES TO SEE EACH EXERCISE COMPLETION
//First exercise to popup an alert when circle pressed
//Second exercise to change background color to blue on click
//Third exercise to set opacity to 0.5
//Fourth exercise to nset opacity to 1 from the css 0.5
//Exercise 5 to increase opacity by 0.1 on each click
//Exercise 6 to dcrease opacity by 0.01 every hundredth of a second
function myInterval(){
    let circle = document.getElementById('circle');
    let circleOpacity = circle.style.opacity;
    circle.style.opacity = circleOpacity - 0.01;
}

function clickEvent(){
    setInterval(myInterval, 10);
}

function changeCircle(){
    let circle = document.getElementById('circle');
    circle.addEventListener('click', clickEvent);
    circle.style.opacity = 1;
}
document.addEventListener('DOMContentLoaded', changeCircle);