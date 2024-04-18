// const marioPersonagem = document.getElementById('mario-personagem')
const telaDeJogar = document.querySelector('.tela-inicial-jogar')
const botaoJogar = document.querySelector('.botao-jogar')

// window.addEventListener('keyup', ()=>{
//     marioPersonagem.setAttribute('translate', '100px 100px')
// })

// window.addEventListener('keyup', ()=>{
//     marioPersonagem.setAttribute('translate', '100px 100px')
// })

botaoJogar.addEventListener('click', () => {
    telaDeJogar.style.display = 'none'
    iniciarJogo()
})

function iniciarJogo() {
    const eventoIniciarJogo = new CustomEvent('iniciarJogo')
    document.dispatchEvent(eventoIniciarJogo)
}