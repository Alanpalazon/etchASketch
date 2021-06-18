const gridCont = document.getElementById('grid-cont');
const gridChild = gridCont.childNodes;
let i;

for(i = 0; i < 100; i++){
    gridCells();
    gridCont.style.gridTemplateColumns = `repeat(10, 1fr)`;
    gridCont.style.gridTemplateRows = `repeat(10, 1fr)`;
} 

function gridCells(){
    const gridKid = document.createElement('div');
    gridKid.classList.add('grid-child');
    gridKid.setAttribute("id", i);
    gridCont.appendChild(gridKid); 
    return;
}


function userGrid(){
    let userDimensions = parseInt(document.getElementById("dimensions").value);
    if((userDimensions**2) < gridChild.length){
        for(i = gridChild.length; i > (userDimensions**2); i--){
            gridCont.removeChild(gridChild[i-1]);
         }
    }

    if((userDimensions**2) > gridChild.length){
        for(i = gridChild.length; i < (userDimensions**2); i++){
            gridCells();
         }
    }
    gridCont.style.gridTemplateColumns = `repeat(${userDimensions}, 1fr)`;
    gridCont.style.gridTemplateRows = `repeat(${userDimensions}, 1fr)`;

    return;
}

function buttonClicks(e){
    if(e.target.id == "rainbow"){
        gridChild.forEach(child => child.addEventListener('mouseover', function(){
        child.style.backgroundColor = 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';}));
        return;
    }
    if(e.target.id == 'white'){mouseOverColour("white"); 
        return;
    }
    if(e.target.id == 'clear'){ 
        if(gridChild.length < 100){ 
            for(let i = gridChild.length; i < 100; i++){
                gridCells();
            }
        }
        if(gridChild.length > 100){
            for(let i = gridChild.length; i > 100; i--){
                gridCont.removeChild(gridChild[i-1]);
            }
        }
        gridCont.style.gridTemplateColumns = `repeat(10, 1fr)`;
        gridCont.style.gridTemplateRows = `repeat(10, 1fr)`;
        gridColourChange();
        return;
    }    
}
     
function gridColourChange(){
    for(i = 0; i < gridChild.length; i++){gridChild[i].style.backgroundColor = "white";}
    return;
}

function mouseOverColour(colourParam){
    gridChild.forEach(child => child.addEventListener('mouseover', function(){
    child.style.backgroundColor = colourParam;}));
    return;
}

document.getElementById('colour').addEventListener('change', function(e){
    mouseOverColour(e.target.value);
});

document.getElementById('rainbow').addEventListener('click', buttonClicks);
document.getElementById('white').addEventListener('click', buttonClicks);
document.getElementById('clear').addEventListener('click', buttonClicks);
document.getElementById('dimensions').addEventListener('change', userGrid);







