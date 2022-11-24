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

let newsArray = [new News('Cineminha','imgs/cinema1.jpeg','slc mto massaboy mto msm'),
                 new News('Cineminha2','imgs/cinema1.jpeg','MUAHAHAHAHAHAHHAHAHAHAHAHHAHAHAHAHHAHAHAHA')]

const zoomCanvas = document.querySelector('#zoomCanvas');
const zoomedNews =  document.querySelector('.zoomedNews');
//#endregion variables

//zoomCanvas.style.display = 'none';
newslist.addEventListener('click',(clickEvent) =>{
    if(clickEvent.target.classList.contains('pop-up')){
        zoomCanvas.style.display = 'flex';
    }
    else{
        console.log('beijinhos')
    }
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