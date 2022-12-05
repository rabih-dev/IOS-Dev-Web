
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

            let itemsArray = [new Item('10:00','Bacurau'),
                             new Item('12:00','Parasite'),
                             new Item('10:00','Cidade de Deus'),
                             new Item('10:30','Auto da Compadecida'),
                             new Item('11:00','Parasite')]
            
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
             /* 
                <div class="tab-item-cont">
                <div> <p class="hour">10:00h</p> </div>
                <div> <p class="event">filme tal tal de sla qual</p> </div>
            </div> */