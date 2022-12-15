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
let newsArray = [new News('Cine PE: Filmes, palestras e entrevistas','../imgs/../imgs/slide/cinema-sao-luiz-cine-pe-sessao.JPG',`Com exibições de filmes, palestras e entrevistas com realizadores, a 26ª edição do Cine PE tem início na sexta (9) e segue até quarta (14). Pela primeira vez, o festival de cinema será realizado em duas salas: o Cinema São Luiz e o Teatro do Parque, na Boa Vista, no Centro do Recife.
                                                                                        As mostras acontecerão nos dois ambientes por causa das obras de reforma no São Luiz. Além disso, seminários vão ser realizados em um hotel em Boa Viagem, na Zona Sul da capital.
                                                                                        Entre os filmes pernambucanos exibidos estão o documentário “A Vida Secreta de Delly” e os curtas “Contos de Amor e Crime”, “Mormaço”, “Da Boca da Noite à Barra do Dia”, “Último Dia”, “Solum”, “A raiz de um” e “Fragmentos de Gondwana”.
                                                                                        `),
                 new News('7ª Edição da MARÉ','../imgs/slide/cinema-sao-luiz-1.jpeg',`A primeira edição da Mostra Ambiental de Cinema do Recife – MARÉ em 2014 e as que se sucederam abriram um universo de lutas ambientais, desafios políticos, superação de crises sanitárias e debates de como enfrentar problemas que ainda levam o planeta ao seu extremo. Agora, o país respira fundo e olha o que ainda pode ser feito. É com esperança que damos largada na 7ª edição da MARÉ que acontece de 29 de novembro a 10 de dezembro de 2022 no Recife e em Fernando de Noronha.
                                                                   Filmes, debates, oficinas e intervenções ambientais ativam um público cada vez mais diverso e presente nas pautas em busca de um lugar mais sustentável. Através das múltiplas telas, a exemplo dos cinemas, telas guerrilhas, vídeo mapping e sessões online preparamos uma seleção de curtas e longas que se conectam com nossos corpos e nossos lugares que exigem olhares sobre as singularidades do povo brasileiro.
                                                                   `),
                 new News('Grande Prêmio do Cinema Brasileiro','../imgs/slide/cinema-sao-luiz-2.jpeg',`A 22ª edição do Grande Prêmio do Cinema Brasileiro já está com inscrições abertas. A maior premiação nacional do audiovisual nacional, tradicionalmente realizado no Rio de Janeiro, mudou para turnê em 2019, passando por São Paulo em 2020 e 2021 e retornando ao Rio de Janeiro em 2022. 
                                                                                    O local e a data do "Grande Prêmio" de 2023, organizado pela Academia Brasileira de Cinema e Artes Audiovisuais, serão divulgados em breve.
                                                                                    `),
                new News(`"Abestalhados 2" e os perrengues de fazer cinema no Brasil`,'../imgs/slide/mural-cinema-sao-luiz.JPG',`Quatro homens com uma pequena produtora querem fazer um filme de ação no Brasil e, como é um gênero caro, estão prontos para tudo. Levantando fundos para a produção, eles filmam programas religiosos noturnos, comerciais de manteiga e até filmes adultos. E tudo é capturado pela estagiária da equipe para ser usado como macking off do filme chamado "Acelerados 2".
                                                                                    Poderia ser um documentário de bastidores do cinema nacional, mas é uma comédia de ação dirigida por Marcos Jorge e Marcelo Botta, que, ao contrário do que o título sugere, não tem antecessor.
                                                                                    `),
                new News(`Filme 'Marte Um' é indicado pelo Brasil para Oscar 2023`,'../imgs/slide/cinema-sao-luiz-3.jpeg',`O filme "Marte Um" foi o indicado pelo Brasil para disputar uma vaga no Oscar 2023 na categoria de Melhor Filme Internacional.
                                                                                    O anúncio foi feito pela Academia Brasileira de Cinema, na manhã desta segunda-feira (5), após reunião do Comitê de Seleção presidida por Bárbara Cariry.
                                                                                    O drama, com direção de Gabriel Martins, retrata a história de uma família negra da periferia de Contagem, em Minas Gerais, que busca seguir seus sonhos em um país que acaba de eleger como presidente um homem de extrema-direita. O longa mostra as lutas e tensões vividas pelo casal Tércia e Wellington, assim como as descobertas de seus filhos Deivid e Eunice.
                                                                                    `),
                new News(`Gaby Amarantos em "Serial Kelly"`,'../imgs/slide/cinema-sao-luiz-cine-pe.JPG',`No longa, Gaby Amarantos faz sua estreia nas telonas como Kelly, uma cantora de brega que ganha a vida cantando em vários "inferninhos" do sertão. No entanto, quando não está trabalhando, ela tenta se vingar dos homens que a machucaram; se alguém lhe deve dinheiro ou a desrespeita, ele é morto.
                                                                                Tais assassinatos chamam a atenção da delegada Fabiola (Paula Cohen), que passa a perseguir a cantora na tentativa de impedi-la de matar. 
                                                                                O filme não julga Kelly, permite que o espectador decida por si mesmo se os motivos dos assassinatos são justificados, mas mostra claramente que Kelly, como mulher negra, tenta lidar da melhor maneira possível.
                                                                                `)]

const zoomCanvas = document.querySelector('#zoom-canvas');
const zoomedNews =  document.querySelector('.zoomed-news');

//#endregion variables

zoomCanvas.style.display = 'none';
newslist.addEventListener('click',(clickEvent) =>{
    if(clickEvent.target.classList.contains('pop-up')){
        zoomCanvas.style.display = 'flex';
        let targetedNewsDiv;
        //pegando a div news que foi clicada
        for (let index = 0; index < clickEvent.path.length; index++) {
           if(clickEvent.path[index].classList.contains('news')){
                targetedNewsDiv = clickEvent.path[index];
           }
            
           if(targetedNewsDiv != undefined){
            console.log(targetedNewsDiv);
            break;
           }
        }

        zoomedNews.querySelector('.zoomed-news-img img').src = targetedNewsDiv.querySelector('.news-img img').src;

        zoomedNews.querySelector('.zoomed-news-overview h2').innerHTML = targetedNewsDiv.querySelector('.news-overview h2').innerHTML;
        zoomedNews.querySelector('.zoomed-news-overview p').innerHTML = targetedNewsDiv.querySelector('.news-overview #full-overview').innerHTML;
        document.body.style.overflowY = 'hidden';
    }
    else{
    }
})

window.addEventListener("keydown", (pressedKey) =>{
    if(pressedKey.key == 'Escape'){
    CloseZoomNews();
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
    divNewsOverview.innerHTML = `<h2 class = "pop-up">${element.title}</h2> <p class = "pop-up">${element.overview.substr(0,100)}...</p> <p id="full-overview">${element.overview}</p>`

    let divSeeMore = document.createElement('div');
    divSeeMore.className = 'ver-mais pop-up'
    divSeeMore.innerHTML = `<p class ="pop-up">Ver mais<br/></p>`

    divNews.appendChild(divNewsImg);
    divNews.appendChild(divNewsOverview);
    divNewsOverview.appendChild(divSeeMore)
    newslist.appendChild(divNews);
})


function CloseZoomNews(){
zoomCanvas.style.display = 'none';
document.body.style.overflowY = 'auto'
}