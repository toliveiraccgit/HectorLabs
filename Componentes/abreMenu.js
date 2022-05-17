const menuAberto = document.querySelector('.secao__conteudo___menu-aberto')
const secaoFecha = document.querySelector('.secao__links___cabecalho-botao-fecha')

const botaoAbreMenu = document.querySelector('#botao-menu-abre')

const botaoFechaMenu = document.querySelector('#botao-menu-fecha')

const vetor1 = document.querySelector('#vetor-1-menu')
const vetor2 = document.querySelector('#vetor-2-menu')
const vetor3 = document.querySelector('#vetor-3-menu')

function abreMenu(){
    menuAberto.style.display = ` flex `
    menuAberto.style.animation = ` animaMenu .3s ease-in-out forwards `

    vetor1.style.animation = ` animaVetor-1 .35s ease forwards `
    vetor2.style.animation = ` animaVetor-2 .6s ease forwards `
    vetor3.style.animation = ` animaVetor-3 .35s ease forwards `

    setTimeout(() => botaoAbreMenu.style.display = ` none `, 300);

    setTimeout(() => botaoFechaMenu.style.display = ` block `, 300);
    setTimeout(() => secaoFecha.style.display = ` flex `, 300);
}

function fechaMenu(){
    menuAberto.style.animation = ` animaMenu-fecha .3s ease-in-out forwards `
    setTimeout(() => menuAberto.style.display = ` none `, 300);
    


    vetor1.style.animation = ` animaVetor-1-fecha .35s ease forwards `
    vetor2.style.animation = ` animaVetor-2-fecha .4s ease forwards `
    vetor3.style.animation = ` animaVetor-3-fecha .35s ease forwards `

    botaoAbreMenu.style.display = ` flex `

    botaoFechaMenu.style.display = ` none `
    secaoFecha.style.display = ` none `
}


const botaoAbreOportunidades = document.querySelector('#botao__abre-oportunidades')
const botaoFechaOportunidades = document.querySelector('#botao__fecha-oportunidades')

const listaOportunidades = document.querySelector('#lista__oportunidades___mobile')

function abreListaOportunidades(){
    listaOportunidades.style.height = ` 100% `
    listaOportunidades.style.overflowY = ` scroll `

    botaoAbreOportunidades.style.display = ` none `
    botaoFechaOportunidades.style.display = ` block ` 
}

function fechaListaOportunidades(){
    listaOportunidades.style.height = ` 2.2rem `
    listaOportunidades.style.overflowY = ` hidden `

    botaoAbreOportunidades.style.display = ` block `
    botaoFechaOportunidades.style.display = ` none ` 
}