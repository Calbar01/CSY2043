function print5(){
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
}
print5();
print5();

function updateAfterLoad(){
    let heading = document.getElementById('heading');
    let paragraph = document.getElementById('paragraph');
    heading.firstChild.nodeValue = 'Updated heading';
    paragraph.firstChild.nodeValue = 'Updated paragraph';
}

document.addEventListener('click', updateAfterLoad);

