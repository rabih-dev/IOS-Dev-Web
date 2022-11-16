let myForm = document.querySelector('#my-form');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let horario = document.querySelector('#horario');
let estilo = document.querySelector('#estilos');
let userList = document.querySelector('#users');

//Escutando o Formulario com addEventListener

myForm.addEventListener('click' , cadastrarCliente)

//chamando funçao do click( cadastrarCliente)
//curiosidade: quando o codigo é compilado, o js joga todas as funçoes para o topo, entao mesmo que voce
//chame a funçao e so declare ela depois, ela ainda irá rodar.

function cadastrarCliente (element){
    element.preventDefault();
    alert("botao funcionando com sucesso"); 
}