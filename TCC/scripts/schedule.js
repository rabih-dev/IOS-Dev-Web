
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
                                new Item('12:00','Parasite'),
                                new Item('10:00','Cidade de Deus'),
                                new Item('10:30','Auto da Compadecida'),
                                new Item('11:00','Parasite'),
                                new Item('12:00','Titanic'),
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
            //#endregion variables            


            itemsArray.forEach(element => {
                let tabItem = document.createElement('div');
                tabItem.className ="tab-item-cont";
            
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
                    
                    // acessar os bang dentro e tal e botar la
                    console.dir(targetedCardDiv.querySelector('.movie-img img'))
                    zoomCanvas.querySelector('.movie-img img').src = targetedCardDiv.querySelector('.card__background img').src;
            
                    console.log(targetedCardDiv.querySelector('.card__heading'))
                    zoomCanvas.querySelector('.movie-info .movie-name h2').innerHTML = targetedCardDiv.querySelector('h3.card__heading').innerHTML
                    zoomCanvas.querySelector('.movie-info .movie-category h2').innerHTML = targetedCardDiv.querySelector('p.card__category').innerHTML
                    zoomCanvas.querySelector('.movie-info .movie-synopsis p').innerHTML = targetedCardDiv.querySelector('p.card__synopsis').innerHTML;
                    document.body.style.overflowY = 'hidden';
                }

                else{
                    console.log('beijinhos')
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
                
             /* 
                <div class="tab-item-cont">
                <div> <p class="hour">10:00h</p> </div>
                <div> <p class="event">filme tal tal de sla qual</p> </div>
            </div> */