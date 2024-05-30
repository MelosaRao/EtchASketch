let container = document.querySelector('#container');

function create_grid(num){

for (let index = 0; index < num; index++) {
    const column = document.createElement("div");
    column.classList.add("divclass");
    
    
    for(let index = 0; index < num; index++){
        let cell = document.createElement("div");
        cell.classList.add("divcell");
        column.append(cell);
    }
    container.append(column); 
    
}


}

function one_color (){
    const cells = document.querySelectorAll('.divcell');

// Add a mouseover event listener
cells.forEach(function(cell){
    
cell.addEventListener('mouseover', () => {
  // Change the button's background color
  cell.style.backgroundColor = 'rgba(0, 0, 0)';
    cell.style.opacity = 1;

});
});
}



create_grid(16);
one_color();



function resizediv(){
    let divcols = document.querySelectorAll('.divclass');
    divcols.forEach(function(col){
        container.removeChild(col);
    })
    let numstr = prompt("Enter the a number from 1 to 100","16");
    while (!/^[0-9]+$/.test(numstr)) {
        alert("You did not enter a number.");
        numstr = prompt("Enter a number: ");
    }
    while(parseInt(numstr)>100 || parseInt(numstr)<1){
        numstr = prompt("please enter a number from 1 to 100");
    }

    let num = Number(numstr);
    
    create_grid(num);
    one_color();


}


function rainbow_color(){
    create_grid();
    const cells = document.querySelectorAll('.divcell');

    // Add a mouseover event listener
    cells.forEach(function(cell){
        
    cell.addEventListener('mouseover', () => {
      // Change the button's background color
    let randomColor = Math.floor(Math.random()*16777215).toString(16);

      cell.style.backgroundColor = `#${randomColor}` ;
      cell.classList.add("rainbow");
      cell.style.opacity = 1;
    });
    });
}

function erazor(){
    const cells = document.querySelectorAll('.divcell');
    // Add a mouseover event listener
    cells.forEach(function(cell){
    cell.addEventListener('mouseover', () => {
      // Change the button's background color
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
      cell.style.backgroundColor = 'rgb(255, 255, 255)' ;
    });
    });
}

function clearcolor(){
    location.reload();
}


function more_opacity(){
    const cells = document.querySelectorAll('.divcell');
    // Add a mouseover event listener
    cells.forEach(function(cell){
    let newopac = 0.3;
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'rgba(0, 0, 0)';
        newopac = newopac + 0.1;
        cell.style.opacity =  newopac;
    });
    });
}
