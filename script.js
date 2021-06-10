const gridCont = document.getElementById('grid-cont');
const gridChild = gridCont.childNodes;

//Problem: this function means cols/rows have fixed widths/heights that won't change 
//when user creates a c custom grid - FIX!
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

createGrid(11, 11);


function buttonClicks(e){
    if(e.target.id == "rainbow"){
            gridChild.forEach(child => child.addEventListener('mouseover', function(){
            child.style.backgroundColor = 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';}));
            return;
    }else if(e.target.id == 'white'){
            gridChild.forEach(child => child.addEventListener('mouseover', function(){
            child.style.backgroundColor = 'white';}));
            return;
    }
}



document.getElementById('rainbow').addEventListener('click', buttonClicks);
document.getElementById('white').addEventListener('click', buttonClicks);
document.getElementById('clear').addEventListener('click', function(){
    gridChild.forEach(child => child.style.backgroundColor == "white");
    for(let i = gridChild.length; i > 100; i--){
        console.log(i);
        gridCont.removeChild(gridChild[i-1]);
    }

});


