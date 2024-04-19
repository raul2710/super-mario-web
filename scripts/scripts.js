// const marioPersonagem = document.getElementById('mario-personagem')
const telaDeJogar = document.querySelector('.tela-inicial-jogar')
const botaoJogar = document.querySelector('.botao-jogar')

// window.addEventListener('keyup', ()=>{
//     marioPersonagem.setAttribute('translate', '100px 100px')
// })

// window.addEventListener('keyup', ()=>{
//     marioPersonagem.setAttribute('translate', '100px 100px')
// })

// telaDeJogar.innerHTML =  `
// <label class="container">One
//     <input type="radio" checked="checked" name="radio">
//     <span class="checkmark"></span>
// </label>
//     <label class="container">Two
//     <input type="radio" name="radio">
// <span class="checkmark"></span>
// </label>
//     <label class="container">Three
//     <input type="radio" name="radio">
// <span class="checkmark"></span>
// </label>
//     <label class="container">Four
//     <input type="radio" name="radio">
// <span class="checkmark"></span>
// </label>
// `

botaoJogar.addEventListener('click', () => {
    
    

    
    telaDeJogar.style.display = 'none'
    iniciarJogo()
})

function iniciarJogo() {
    const eventoIniciarJogo = new CustomEvent('iniciarJogo')
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