class News{
    constructor(title,imgPath,overview){
        this.title = title;
        this.imgPath = imgPath;
        this.overview = overview;
    }
}
//#endregion classes

//#region variables
const newslist = document.querySelector('.newslist');
let newsArray = [new News('Cineminha','imgs/cinema2.jpeg','slc mto massaboy mto msm'),
                 new News('Cineminha2','imgs/cinema1.jpeg','MUAHAHAHAHAHAHHAHAHAHAHAHHAHAHAHAHHAHAHAHA'),
                 new News('Cineminha2','imgs/cinema1.jpeg','MUAHAHAHAHAHAHHAHAHAHAHAHHAHAHAHAHHAHAHAHA')]

const zoomCanvas = document.querySelector('#zoomCanvas');
const zoomedNews =  document.querySelector('.zoomedNews');

//#endregion variables

//zoomCanvas.style.display = 'none';
newslist.addEventListener('click',(clickEvent) =>{
    if(clickEvent.target.classList.contains('pop-up')){
        zoomCanvas.style.display = 'flex';
        let targetedNewsDiv;
        //pegando a div news que foi clicada
        for (let index = 0; index < clickEvent.path.length; index++) {
           if(clickEvent.path[index].classList.contains('news')){
                targetedNewsDiv = clickEvent.path[index];
           }
            
           if(targetedNewsDiv != undefined){
            console.log(targetedNewsDiv);
            break;
           }
        }
        
        console.dir(targetedNewsDiv.querySelector('.news-img img'))
        // acessar os bang dentro e tal e botar la
        zoomedNews.querySelector('.news-img img').src = targetedNewsDiv.querySelector('.news-img img').src;

        zoomedNews.querySelector('.news-overview h2').innerHTML = targetedNewsDiv.querySelector('.news-overview h2').innerHTML
        zoomedNews.querySelector('.news-overview p').innerHTML = targetedNewsDiv.querySelector('.news-overview p').innerHTML
    }
    else{
        console.log('beijinhos')
    }
})

zoomCanvas.addEventListener('keypress', (pressedKey) =>{
    if(pressedKey.keyCode == 'escape'){
    CloseZoomNews();
    }
    
        console.log(pressedKey.keyCode);
})



newsArray.forEach(element => {
    let divNews = document.createElement('div');
    divNews.className ="news pop-up";

    let divNewsImg = document.createElement('div');
    divNewsImg.className = "news-img pop-up";
    divNewsImg.innerHTML = `<img src = "${element.imgPath}" class = "pop-up">`;

    let divNewsOverview = document.createElement('div');
    divNewsOverview.className = "news-overview pop-up";
    divNewsOverview.innerHTML = `<h2 class = "pop-up">${element.title}</h2> <p class = "pop-up">${element.overview}</p>`

    divNews.appendChild(divNewsImg);
    divNews.appendChild(divNewsOverview);
    newslist.appendChild(divNews);
})


function CloseZoomNews(){
zoomCanvas.style.display = 'none';
}
