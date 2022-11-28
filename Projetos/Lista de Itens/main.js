//#region variables
const filter = document.querySelector('#filter');
const addForm = document.querySelector('#addForm');
const itemList = document.querySelector('#items');
//#endregion variables
//#region functions
function addItem(event){
    event.preventDefault();

    let itemInput = document.getElementById('item')
    let newItem = itemInput.value;
    document.getElementById('item').value = ' ';

    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));   
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger  btn-sm float-end delete';
    deleteBtn.appendChild(
        document.createTextNode('X')
    )
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
    
}

function deleteItem(clickLocation){
    if(clickLocation.target.classList.contains('delete')){
        let li = clickLocation.target.parentElement;
        itemList.removeChild(li);
    }
}

function searchItem(event){
    let txt = event.target.value.toLowerCase();
    let allItems = itemList.getElementsByTagName('li');

    Array.from(allItems).forEach(element => {
        if(element.textContent.toLowerCase().indexOf(txt) != -1){
            element.style.display = 'block'
        }
        else{
            element.style.display = 'none'
        }
    });
}
//#endregion functions

filter.addEventListener('keyup',searchItem);
addForm.addEventListener('submit',addItem);
itemList.addEventListener('click',deleteItem)