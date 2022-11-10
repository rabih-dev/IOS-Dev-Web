let  title = document.getElementById('title');
title.innerHTML = 'JS MUAHAHAHA >:3';

title.style.textAlign = "center";
title.style.backgroundColor = "hotpink";
title.style.border = "4px solid black";

//AQUI COMEÇA A BRINCADEIRINHA

let green = document.createElement('div');
green.style.width = "100px";
green.style.height = "100px";
green.style.backgroundColor =  "green";

let black = document.createElement('div');
black.style.width = "100px";
black.style.height = "100px";
black.style.backgroundColor =  "black";


let ln = document.createElement('br');

let txt = document.getElementById('txtScreen');

for (let index = 0; index < txt.textContent.length; index++) {
    
    switch(txt.textContent[index]){

        case 'z':
        document.body.appendChild(green);
        console.log("eh o verde");
        break;

        case 'b':
        document.body.appendChild(black);
        console.log("eh o precto");
        break;
        
        case 's':
        document.body.appendChild(ln);
            
    }
}





