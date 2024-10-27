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

createGrid(16);


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

