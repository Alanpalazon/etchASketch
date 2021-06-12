const gridCont = document.getElementById('grid-cont');
const gridChild = gridCont.childNodes;

function createGrid(gridRows, gridCols){
    gridCont.style.gridTemplateColumns = `repeat(${ gridCols}, 1fr)`;
    gridCont.style.gridTemplateRows = `repeat(${ gridRows}, 1fr)`;
    for(let i = 0; i < (gridRows * gridCols); i++){
        const gridKid = document.createElement('div');
        gridKid.classList.add('grid-child');
        gridKid.setAttribute("id", i);
        gridCont.appendChild(gridKid);        
        } 
}

createGrid(20, 20);

function gridColourChange(){
    for(let j = 0; j < gridChild.length; j++){
        gridChild[j].style.backgroundColor = "white";
    }
}

// createmouseover colour change functiuion 

function mouseOverColour(colourParam){
    gridChild.forEach(child => child.addEventListener('mouseover', function(){
        child.style.backgroundColor = colourParam;}));
}

function buttonClicks(e){
    if(e.target.id == "rainbow"){
            gridChild.forEach(child => child.addEventListener('mouseover', function(){
            child.style.backgroundColor = 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';}));
            return;
        }
    if(e.target.id == 'white'){mouseOverColour("white"); return;}
    if(e.target.id == 'clear'){
        for(let i = gridChild.length; i > 100; i--){
            gridCont.removeChild(gridChild[i-1]);
        }
        gridCont.style.gridTemplateColumns = `repeat(10, 1fr)`;
        gridCont.style.gridTemplateRows = `repeat(10, 1fr)`;
        gridColourChange();        
    }       
}




document.getElementById('rainbow').addEventListener('click', buttonClicks);
document.getElementById('white').addEventListener('click', buttonClicks);
document.getElementById('clear').addEventListener('click', buttonClicks);
//create button 
    // use number input for grid/cols 
    //move colour inout to button group 
         // use colour input as mouseOverColour()


