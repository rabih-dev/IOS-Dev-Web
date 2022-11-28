let myForm = document.querySelector('#my-form');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let horario = document.querySelector('#horario');
let estilo = document.querySelector('#estilos');
let userList = document.querySelector('#users');
let errorMsg = document.querySelector('.error')

let hasError = false;

//Escutando o Formulario com addEventListener
myForm.addEventListener('submit' , cadastrarCliente)

nameInput.addEventListener('change', () =>
correctError(nameInput))

emailInput.addEventListener('change', () =>{
    correctError(emailInput)
    validateEmail();
})

function validateEmail(){
    let regex =  new RegExp(/.*@*.*\..*/i)
    if(regex.test(emailInput.value)){
        return true;
    }

    else{
        errorMsg.style.display = 'block';
        errorMsg.innerHTML = 'Email inválido.'
    }
}


//chamando funçao do click( cadastrarCliente)
//curiosidade: quando o codigo é compilado, o js joga todas as funçoes para o topo, entao mesmo que voce
//chame a funçao e so declare ela depois, ela ainda irá rodar.
function correctError(field){
    //if(hasError){
    field.style.border = '1px solid white'
    errorMsg.innerHTML = ' '
    errorMsg.style.display = 'none';
    //}
}

function Error(field){
    field.style.border = '1px solid red'
    errorMsg.innerHTML = 'Preencha os campos corretamente.'
    errorMsg.style.display = 'block';
    //hasError = true;
}

function cadastrarCliente (element){
    element.preventDefault();
   if(nameInput.value === ''){
        Error(nameInput)
    
    if(emailInput.value === ''){
        Error(emailInput) 
    }
    }

   else{
        if(validateEmail()){
        const li = document.createElement('li'); //apesar de estar numa const, voce ainda pode alterar os itens de dentro do objeto segurado, assim criando uma segurança, garantindo que sempre será esse li
        li.appendChild(document.createTextNode(`${nameInput.value} (${emailInput.value}) agendou uma tattoo ${estilo.value} às ${horario.value} horas!`));
        userList.appendChild(li);
        }

        else{
            validateEmail();
        }
    }
}