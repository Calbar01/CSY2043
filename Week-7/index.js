//First exercise to popup an alert when circle pressed
//Second exercise to change background color to blue on click
//Third exercise to set opacity to 0.5
function clickEvent(){
    //alert('Circle was pressed');
    let circle = document.getElementById('circle');
    circle.style.backgroundColor = 'blue';
    circle.style.opacity = 0.5;
}

function changeCircle(){
    let circle = document.getElementById('circle');
    circle.addEventListener('click', clickEvent);
}




document.addEventListener('DOMContentLoaded', changeCircle);