function print5(){
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
}
print5();
print5();


function updateParagraph(){
    let paragraph = document.getElementById('paragraph');
    paragraph.firstChild.nodeValue = 'New Paragraph';
}

function updateHeading(){
    let heading = document.getElementById('heading');
    heading.firstChild.nodeValue = 'Updated heading';
}

function onClick(){
    let heading = document.getElementById('heading');
    heading.addEventListener('click',updateHeading);

    let paragraph = document.getElementById('paragraph');
    paragraph.addEventListener('click',updateParagraph);
}
document.addEventListener('DOMContentLoaded', onClick);

