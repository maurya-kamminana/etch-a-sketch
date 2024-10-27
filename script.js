function createGrid(size){
    const container = document.querySelector('#container');

    for(let i = 0; i<size; i++){
        const rowList = document.createElement('div');
        rowList.classList.add('row');
        for(let j = 0; j<size; j++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            rowList.appendChild(cell);
        }
        container.appendChild(rowList);
    }
}

createGrid(32);


const resizeBtn = document.querySelector("#resize");
resizeBtn.addEventListener('click', function(){
    const newSize = prompt("Enter the new size of the grid");
    if(newSize > 100){
        alert("The maximum size of the grid is 100");
        return;
    }
    const container = document.querySelector('#container');
    container.innerHTML = '';
    createGrid(newSize);
});


let isRandomColor = false;
let isProgressiveSet = false;
// add eventListener on container to use event delegation for event mouseover a cell to change its background color to black
const container = document.querySelector('#container');
container.addEventListener('mouseover', function(e){
    if(e.target.classList.contains('cell')){
        if(isRandomColor){
            const r = Math.floor(Math.random()*255);
            const g = Math.floor(Math.random()*255);
            const b = Math.floor(Math.random()*255);
            e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
        }
        else{
            if(isProgressiveSet){
                let opacity = parseFloat(e.target.style.opacity) || 0;
                opacity = Math.min(opacity + 0.1, 1);
                e.target.style.opacity = opacity;
            }
            else{
                e.target.style.opacity = 1;
            }
            e.target.style.backgroundColor = `rgb(0,0,0)`;
        }
    }
});

const randomColorBtn = document.querySelector("#random-colors");
randomColorBtn.addEventListener('click', function(){
    isRandomColor = !isRandomColor;
    if(isRandomColor){
        randomColorBtn.textContent = "Change to Black";
    }
    else{
        randomColorBtn.textContent = "Change to Random Color";
    }
});

const progressiveSetBtn = document.querySelector("#progressive-set");
progressiveSetBtn.addEventListener('click', function(){
    isProgressiveSet = !isProgressiveSet;
    if(isProgressiveSet){
        progressiveSetBtn.textContent = "Change to solid(non progressive darkening)";
    }
    else{
        progressiveSetBtn.textContent = "Change to Progressive darkening";
    }
});


const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener('click', function(){
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
});

