// const marioPersonagem = document.getElementById('mario-personagem')
const telaDeJogar = document.querySelector('.tela-inicial-jogar')
const botaoJogar = document.querySelector('.botao-jogar')

const eventoIniciarJogo = new CustomEvent('iniciarJogo')

botaoJogar.addEventListener('click', () => {
    telaDeJogar.style.display = 'none'
    iniciarJogo()
})

function iniciarJogo() {
    document.dispatchEvent(eventoIniciarJogo)
}


function musicasTemas() {
    const radioButtonMusicas = document.createElement(
        `
        <label class="container">One
        <input type="radio" checked="checked" name="radio">
        <span class="checkmark"></span>
        </label>
        <label class="container">Two
        <input type="radio" name="radio">
        <span class="checkmark"></span>
        </label>
        <label class="container">Three
        <input type="radio" name="radio">
        <span class="checkmark"></span>
        </label>
        <label class="container">Four
        <input type="radio" name="radio">
        <span class="checkmark"></span>
        </label>
        `
    )
    return radioButtonMusicas
}

