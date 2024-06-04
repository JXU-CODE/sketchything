const body = document.body;
const container = document.getElementById('container');


//loop to create grid based on userinput
for (let i = 0; i < 64; i++) {
    //create a div  
    const square = document.createElement('div');
    //set class name
    square.classList.add('square');
    //add to container
    container.appendChild(square);
 


    square.addEventListener('mouseover', () => {
        square.classList.add('colored');
    })

}

//reset the grid by reloading the page

//get the button
const erase = document.getElementById('erase');

//make the button reload the darn page
erase.addEventListener('click',reload);

function reload(){
    window.location.reload();
}