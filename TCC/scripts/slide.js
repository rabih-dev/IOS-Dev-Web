//#region variables
const slides = document.querySelectorAll('.slide');
//#endregion variables

//#region functions
function slidePass(){
   for (let index = 0; index < slides.length; index++){
      if(slides[index].classList.contains('show-slide'))
      {
         slides[index].classList.remove('show-slide')/*Escondendo o slide atual*/
         console.log('tirei o showslide')
         if(index == slides.length-1) /*Verificando se é o ultimo slide*/
         {
            slides[0].className = 'slide show-slide';/*Se for, volta pro primeiro*/ 
            break;
         }

         else{
            slides[index+1].className = 'slide show-slide'; /*Se nao for, vai pro proximo*/
            break;
         }
      }  
   }
}
//#endregion functions
setInterval(slidePass,5000);
