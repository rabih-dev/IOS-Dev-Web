//#region variables
const images = document.querySelectorAll('.slides img');
//#endregion variables

//#region functions
function slidePass(){
   for (let index = 0; index < images.length; index++){
      if(images[index].classList.contains('show-slide'))
      {
         images[index].classList.remove('show-slide')/*Escondendo o slide atual*/
         console.log('tirei o showslide')
         if(index == images.length-1) /*Verificando se é o ultimo slide*/
         {
            images[0].className = 'show-slide';/*Se for, volta pro primeiro*/ 
            break;
         }

         else{
            images[index+1].className = 'show-slide'; /*Se nao for, vai pro proximo*/
            break;
         }
      }  
   }
}
//#endregion functions

setInterval(slidePass,5000);

