let paragrafo = document.querySelector('p');
paragrafo.style.background = "pink";

let parClasse= document.querySelector('p.exemplo').innerHTML = 'Mudei o texto aqui';

let item= document.querySelectorAll('.item');
for (let index = 0; index < item.length; index++) {
    if(index %2 )
    item[index].style.border='1px solid blue';
}

const Clique = () =>{
    let span= document.querySelector('#my-span');
    span.style.transition = '0.8s'
    span.style.background= 'red';

}