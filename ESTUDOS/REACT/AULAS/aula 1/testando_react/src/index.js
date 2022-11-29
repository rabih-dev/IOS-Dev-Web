import React from 'react'
import  ReactDOM  from 'react-dom'

/* const name = 'bibizinho, o main rato//shaco ap sup'
const msg = (<h1>
                salve salve {name}!
            </h1>)

const user ={
    primeiroNome: 'rabih',
    segundoNome: 'tabatchnik'
};

function formatName(user){
    return user.primeiroNome + ' ' + user.segundoNome;
}

const element= (<p>
                    Salve, {formatName(user)}!
                </p>) */

/* function tick(){
    const name =  'bibizinho'
    const element = (
        <div>
            <h1>Saaaaalve, {name}</h1>
            <h2>Agora são: {new Date().toLocaleTimeString()}.</h2>
        </div>
    );

    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick,1000); */

//Ele reescreve, ou seja, só o de baixo vai aparecer
//ReactDOM.render(msg, document.getElementById('root'))
//ReactDOM.render(element, document.getElementById('root'))

function Welcome(props){
    return <h1>Saaalve, {props.name}!</h1>
}

function App(){
    return(
        <>
            <Welcome name= 'bibi'/>
            <Welcome name= 'nana'/>
            <Welcome name= 'kiki'/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));