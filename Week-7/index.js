//NOTE: CHECK PUSHES TO SEE EACH EXERCISE COMPLETION
//First exercise to popup an alert when circle pressed
//Second exercise to change background color to blue on click
//Third exercise to set opacity to 0.5
//Fourth exercise to nset opacity to 1 from the css 0.5
//Exercise 5 to increase opacity by 0.1 on each click
//Exercise 6 to dcrease opacity by 0.01 every hundredth of a second
//Exercise 7 to move the circle to the left every click of the down button
//Exercise 8 to add a console log to check when a button is clicked
function keyDown(event){
    let circle = document.getElementById('circle');
    let posLeft = circle.offsetLeft;
    circle.style.left = posLeft - 10 + 'px';
    console.log(event.keyCode);
}

function changeCircle(){
    document.addEventListener('keydown', keyDown);
}
document.addEventListener('DOMContentLoaded', changeCircle);