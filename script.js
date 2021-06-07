//global vars
const gridCont = document.getElementById("grid-cont");
let gridCells = 100;

//on page load 

    //grid 
gridCont.style.gridTemplateColumns = `repeat(${ Math.sqrt(gridCells)}, 1fr)`;
gridCont.style.gridTemplateRows = `repeat(${ Math.sqrt(gridCells)}, 1fr)`;
for(let i = 0; i < gridCells; i++){
    const gridKid = document.createElement('div');
    gridKid.classList.add('grid-child');
    gridKid.setAttribute("id", i);
    gridCont.appendChild(gridKid);        
    } 
    //colour
gridCont.childNodes.forEach(child => child.addEventListener('mouseover', function(){
        child.style.backgroundColor = "black"}));

//when rainbow clicked
document.getElementById('rainbow').addEventListener('click', function(){
    gridCont.childNodes.forEach(child => child.addEventListener('mouseover', function(){
        child.style.backgroundColor = 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';}));
});

//when eraser clicked
document.getElementById('white').addEventListener('click', function(){
    gridCont.childNodes.forEach(child => child.addEventListener('mouseover', function(){
        child.style.backgroundColor = 'White';}));
});

//when reset clicked
document.getElementById('clear').addEventListener('click', function(){
    gridCont.children.style.backgroundColor == "white";
});