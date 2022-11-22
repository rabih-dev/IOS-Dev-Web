//#region variables
const filter = document.querySelector('#filter');
const addForm = document.querySelector('#addForm');
const itemList = document.querySelector('#items');
//#endregion variables
//#region functions
function addItem(event){
event.preventDefault();
alert('demonio');
}

function searchItem(){

}
//#endregion functions

filter.addEventListener('keyup',searchItem);
addForm.addEventListener('submit',addItem);