const marioPersonagem = document.getElementById('mario-personagem')
const encanamento= document.getElementById('encanamento')
const musicaFundo1 = new Audio('../audios/musica-fundo-1.mp3')
const musicaFundo2 = new Audio('../audios/musica-fundo-2.mp3')
const marioPulando = new Audio('../audios/mario-pulando.mp3')
const marioMorte = new Audio('../audios/morte-mario.mp3')
const jogoPause = new Audio('../audios/pause.mp3')
const gameOver = new Audio('../audios/game-over.mp3')
let pontuacao = 0

// Colocar o código dentro desse evento
// document.addEventListener('iniciarJogo', () => {
//     musicaFundo1.play()
// })


document.addEventListener('keydown', (keyPressed)=>{
    if (keyPressed.code == 'Space') {
        salto()
    }
})
    
// pontuação
const pontos = setInterval(( ) => {
        pontuacao=pontuacao+10
        console.log(`pontos: ${pontuacao}`)
}, 1000);


// salto
    const salto = () =>{
        marioPersonagem.classList.add('salto')
    setTimeout(() => {
        marioPersonagem.classList.remove('salto')
    }, '600');
}

// game-over
const andamento = setInterval(() =>{
    const encanamentoPosicao = encanamento.offsetLeft
    const marioPosicao = +window.getComputedStyle(marioPersonagem).bottom.replace('px','')
    if (encanamentoPosicao<=224 && marioPosicao<125 ){
        clearInterval(pontos)
      encanamento.style.animation = 'none'
      encanamento.style.left = `${encanamentoPosicao}px`
      marioPersonagem.style.scale = 0.9
      marioPersonagem.setAttribute('src', '../images/game-over.png')
      marioPersonagem.style.bottom = `${marioPosicao}px`
      marioPersonagem.style.width='90px'
      marioPersonagem.classList.add('gameOver')
      clearInterval(andamento)
    }
}, 10)


  

