const gridCont = document.getElementById("grid-cont");

// on page load display default 16x16 grid ready to paint
window.addEventListener('load',createGrid(256));
//not creating rows and columns - FIX!
function createGrid(gridCells){ 
    for(let i = 0; i < gridCells; i++){
            gridCont.style.display = "grid";
            gridCont.style.gridTemplateRows = "Math.floor(Math.sqrt(gridCells))"; 
            gridCont.style.gridTemplateRows = "Math.floor(Math.sqrt(gridCells))";
            const gridKid = document.createElement('div');
            gridKid.classList.add('default-grid-child');
            gridKid.setAttribute("id", i);
            gridKid.textContent = i;
            gridCont.appendChild(gridKid);
            
    }
}

//might be able to use thsis function again if includes params
function mouseOverColour(targetElem, colourChange){
     const targetElemChild = document.getElementById(targetElem).childNodes;
     targetElemChild.forEach(child => child.addEventListener('mouseover', function(){
        child.textContent = colourChange;
     }));
}

mouseOverColour("grid-cont", "blue");


