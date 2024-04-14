const body = document.body;
const container = document.getElementById('container');


//ask user for input
//create button to make a grid, up to a maximum of 64/64, could be bigger, but too lazy to test




//adjust container width and height based on number of squares?
//ex: height and width should both equal to length and width * number of rows and columns




//loop to create grid based on userinput
for (let i = 0; i < 12; i++) {
    //create a div
    const square = document.createElement('div');
    square.className = 'square';
    //add to container
    container.appendChild(square);
    console.log('bungus');
 }
