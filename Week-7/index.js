//First exercise to popup an alert when circle pressed
//Second exercise to change background color to blue on click
function clickEvent(){
    //alert('Circle was pressed');
    let circle = document.getElementById('circle');
    circle.style.backgroundColor = 'blue';
}

function changeCircle(){
    let circle = document.getElementById('circle');
    circle.addEventListener('click', clickEvent);
}




document.addEventListener('DOMContentLoaded', changeCircle);