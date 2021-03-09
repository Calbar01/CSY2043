//First exercise to popup an alert when circle pressed
//Second exercise to change background color to blue on click
//Third exercise to set opacity to 0.5
//Fourth exercise to nset opacity to 1 from the css 0.5
function clickEvent(){
    //alert('Circle was pressed');
    let circle = document.getElementById('circle');
    circle.style.backgroundColor = 'blue';
    circle.style.opacity = 1;
    circle.style.transitionDuration = '2s';
}

function changeCircle(){
    let circle = document.getElementById('circle');
    circle.addEventListener('click', clickEvent);
    circle.style.opacity = 0.5;
}
document.addEventListener('DOMContentLoaded', changeCircle);