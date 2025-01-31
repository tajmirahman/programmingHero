// Role Number ------  1 


function clickMe() {
    document.body.style.backgroundColor = 'red';
}


// Role Number ------  2

const BlueButton = document.getElementById('blue-button');
BlueButton.onclick = () => {
    document.body.style.backgroundColor = 'blue';
}

//  Role Number 3

const makePurple = document.getElementById('make-purple');
makePurple.addEventListener('click', () => {
    document.body.style.backgroundColor = 'purple';
});


// Role Number   4

document.getElementById('golden-rod').addEventListener('click', () => {
    document.body.style.backgroundColor = 'goldenrod';
});