
//#region classes
class Item{
    constructor(hour,event){
        this.hour = hour;
        this.event = event;
    }
}
//#endregion classes

//#region variables
const programacao = document.querySelector('.programacao');

let itemsArray =    [new Item('10:00','Bacurau'),
                    new Item('10:00','Parasite'),
                    new Item('10:00','Cidade de Deus'),
                    new Item('10:30','Auto da Compadecida'),
                    new Item('11:00','Parasite'),
                    new Item('11:00','Titanic'),
                    new Item('15:00','Parasite'),
                    new Item('16:00','Cidade de Deus'),
                    new Item('15:30','Titanic'),
                    new Item('13:45','Bacurau'),
                    new Item('15:00','Parasite'),
                    new Item('16:00','Auto da compadecida'),
                    new Item('17:45','Bacurau'),
                    new Item('17:00','Bacurau'),
                    new Item('16:30','Auto da compadecida'),
                    new Item('15:00','Titanic'),
                    new Item('16:30','Cidade de Deus'),
                    new Item('17:30','bacurau'),
                    new Item('16:45','Auto da compadecida'),
                    new Item('17:00','Parasita'),
                    new Item('16:30','Auto da compadecida'),
                    new Item('15:00','Titanic'),
                    new Item('16:30','Auto da compadecida'),
                    new Item('17:30','bacurau'),
                    new Item('16:45','Auto da compadecida'),
                    new Item('17:00','Parasita'),
                    new Item('16:30','Auto da compadecida'),
                    new Item('15:00','Titanic'),
                    new Item('16:30','Auto da compadecida'),
                    new Item('17:30','bacurau')]

const cardGrid = document.querySelector('.card-grid')
const zoomCanvas = document.getElementById('zoom-canvas')   
const dropdownOptions = document.querySelectorAll('button.dropdown-option') 
const dropdownPlaceholder = document.querySelector('#dropdown-placeholder')   
const placeholderDropdownArrow = dropdownPlaceholder.querySelector('#dropdown-arrow')     
//#endregion variables            


itemsArray.forEach(element => { 
    
    if(Number(element.hour.substring(0,2)) < 12){
        dayshift = 'manha'
    }

    else{
        dayshift = 'tarde'
    }
    let tabItem = document.createElement('div');
    tabItem.className =`tab-item-cont ${dayshift}`;

    let hourDiv = document.createElement('div');
    hourDiv.className = "hour";
    hourDiv.innerHTML = `<p>${element.hour}</p>`;

    let eventDiv = document.createElement('div');
    eventDiv.className = "event";
    eventDiv.innerHTML = `<p>${element.event}</p>`

    tabItem.appendChild(hourDiv);
    tabItem.appendChild(eventDiv);
    programacao.appendChild(tabItem);
})

zoomCanvas.style.display='none';
cardGrid.addEventListener('click',(clickEvent) =>{
    if(clickEvent.target.classList.contains('pop-up')){
        zoomCanvas.style.display = 'flex';
        let targetedCardDiv;
        //pegando a div news que foi clicada
        for (let index = 0; index < clickEvent.path.length; index++) {
            if(clickEvent.path[index].classList.contains('card')){
                targetedCardDiv = clickEvent.path[index];
            }
            
            if(targetedCardDiv != undefined){
            console.log(targetedCardDiv);
            break;
            }
        }
        
        console.dir(targetedCardDiv.querySelector('.movie-img img'))
        zoomCanvas.querySelector('.movie-img img').src = targetedCardDiv.querySelector('.card__background img').src;

        console.log(targetedCardDiv.querySelector('.card__heading'))
        zoomCanvas.querySelector('.movie-info .movie-name h2').innerHTML = targetedCardDiv.querySelector('h3.card__heading').innerHTML
        zoomCanvas.querySelector('.movie-info .movie-category h2').innerHTML = targetedCardDiv.querySelector('p.card__category').innerHTML
        zoomCanvas.querySelector('.movie-info .movie-synopsis p').innerHTML = targetedCardDiv.querySelector('p.card__synopsis').innerHTML;
        document.body.style.overflowY = 'hidden';
    }
})

window.addEventListener("keydown", (pressedKey) =>{
    if(pressedKey.key == 'Escape'){
    closeZoomedMovie();
    }
})

function closeZoomedMovie(){
    zoomCanvas.style.display = 'none';
    document.body.style.overflowY = 'auto'
    }


function placeholderClick(){
    let turnedOnCount=0;
   
    if(placeholderDropdownArrow.innerHTML == "▼"){
        placeholderDropdownArrow.innerHTML = "&#9650;"
    }

    else{
        placeholderDropdownArrow.innerHTML = "&#9660;"
    }
    
    dropdownOptions.forEach(element => {
        
        if(element.style.display == 'flex')
        {
            turnedOnCount++;
        }
        element.style.display = 'flex'
    });

    if(turnedOnCount == dropdownOptions.length){
      
        turnOptionsOff();
        turnedOnCount = 0;
    }
}

function turnOptionsOff(){
    dropdownOptions.forEach(element => {
        element.style.display = 'none'
    });
}
function selectManha(){
    console.log('rodei')
    dropdownPlaceholder.innerHTML = dropdownOptions[0].innerHTML;
    turnOptionsOff();
    const tabItems = programacao.querySelectorAll('.tab-item-cont')
    tabItems.forEach(element => {
        if(!element.classList.contains('manha') & !element.classList.contains('week-day')){
            element.style.display = 'none'
        }

        else if(element.classList.contains('manha') & !element.classList.contains('week-day')){
            element.style.display = 'block'
        }
    });
    
}

function selectTarde(){
    dropdownPlaceholder.innerHTML = dropdownOptions[1].innerHTML;
    turnOptionsOff();
    const tabItems = programacao.querySelectorAll('.tab-item-cont')
    tabItems.forEach(element => {
        if(!element.classList.contains('tarde') & !element.classList.contains('week-day')){
            element.style.display = 'none'
        }

        else if(element.classList.contains('tarde') & !element.classList.contains('week-day')){
            element.style.display = 'block'
        }
    });
}