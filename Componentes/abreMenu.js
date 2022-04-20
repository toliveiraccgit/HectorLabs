const menuAberto = document.querySelector('.secao__conteudo___menu-aberto')

const botaoAbreMenu = document.querySelector('#botao-menu-abre')

const botaoFechaMenu = document.querySelector('#botao-menu-fecha')

function abreMenu(){
    menuAberto.style.display = ` flex `

    botaoAbreMenu.style.display = ` none `

    botaoFechaMenu.style.display = ` block `
}

function fechaMenu(){
    menuAberto.style.display = ` none `

    botaoAbreMenu.style.display = ` block `

    botaoFechaMenu.style.display = ` none `
}