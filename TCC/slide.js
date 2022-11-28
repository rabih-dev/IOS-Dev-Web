//#region variables
let imgsPathes = ['imgs/cinema1.jpeg','imgs/cinema2.jpeg','imgs/cinema3.jpeg'];
const slideImg = document.querySelector('.slides img');
let index = 0;
//#endregion variables
//#region functions
function SlidePass(){
   slideImg.src = imgsPathes[index];
   index++;
   if(index == (imgsPathes.length)){
    index = 0;
   }
}
//#endregion functions

setInterval(SlidePass, 2000)
