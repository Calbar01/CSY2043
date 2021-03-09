//First exercise to popup an alert when circle pressed
function clickEvent(){
    alert('Circle was pressed');
}

function changeCircle(){
    let circle = document.getElementById('circle');
    circle.addEventListener('click', clickEvent);
}




document.addEventListener('DOMContentLoaded', changeCircle);