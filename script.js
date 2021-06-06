//function calls and onload functionality

const gridCont = document.getElementById("grid-cont");
window.addEventListener('load',createGrid(randomGridNum()));


//add if statement for to check if user has craeated a grid and then load that grid
//instead of default to window  



//functions 


//not creating rows - fix!
function createGrid(gridCells){ 
    gridCont.style.gridTemplateColumns = `repeat(${ Math.sqrt(gridCells)}, 1fr)`;
    gridCont.style.gridTemplateRows = `repeat(${ Math.sqrt(gridCells)}, 1fr)`;
    for(let i = 0; i < gridCells; i++){
        const gridKid = document.createElement('div');
        gridKid.classList.add('grid-child');
        gridKid.setAttribute("id", i);
        gridCont.appendChild(gridKid);        
    }  
}

function mouseOverColour(targetElem, colourChange){
    //add if statement to check whether div created by user or default 
    let randColour = Math.floor(Math.random() * 256);
     const targetElemChild = document.getElementById(targetElem).childNodes;
     targetElemChild.forEach(child => child.addEventListener('mouseover', function(){
        child.style.backgroundColor= colourChange;
     }));
}

mouseOverColour("grid-cont", randomHsl());

function randomHsl() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}

function randomGridNum(){
    let newRandNum = Math.floor(Math.random()*(16 - 2) + 2);
    const gridColsRows = newRandNum**2;
    return gridColsRows;
}



