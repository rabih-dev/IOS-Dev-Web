let myForm = document.querySelector('#my-form');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let horario = document.querySelector('#horario');
let estilo = document.querySelector('#estilos');
let userList = document.querySelector('#users');

//Escutando o Formulario com addEventListener

myForm.addEventListener('submit' , cadastrarCliente)

//chamando funçao do click( cadastrarCliente)
//curiosidade: quando o codigo é compilado, o js joga todas as funçoes para o topo, entao mesmo que voce
//chame a funçao e so declare ela depois, ela ainda irá rodar.

function cadastrarCliente (element){
    element.preventDefault();
   // alert("botao funcionando com sucesso"); 
   if(nameInput.value != '' && emailInput.value != ''){
   const li = document.createElement('li'); //apesar de estar numa const, voce ainda pode alterar os itens de dentro do objeto segurado, assim criando uma segurança, garantindo que sempre será esse li
   li.appendChild(document.createTextNode(`${nameInput.value} (${emailInput.value}) agendou uma tattoo ${estilo.value} às ${horario.value} horas!`));
   userList.appendChild(li);
   }
   else{
    alert('bo escreve ne boy');
   }
}