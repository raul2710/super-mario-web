const marioPersonagem = document.getElementById('mario-personagem')
const encanamento= document.getElementById('encanamento')
const placar = document.querySelector('.pontuacao')
const espacoPersonagem = document.getElementById('divpersonagem')
const musicaFundo1 = new Audio('../audios/musica-fundo-1.mp3')
const musicaFundo2 = new Audio('../audios/musica-fundo-2.mp3')
const marioPulando = new Audio('../audios/mario-pulando.mp3')
const marioMorte = new Audio('../audios/morte-mario.mp3')
const jogoPause = new Audio('../audios/pause.mp3')
const gameOver = new Audio('../audios/game-over.mp3')
const nuvem = document.querySelector('.img-nuvens')

let pontuacao = 0
let pontosRecorde = 0
let historico

// Escolher a dificuldade
// encanamento.style.animationDuration = '5s' 

// Colocar o código dentro desse evento
// document.addEventListener('iniciarJogo', () => {
//     musicaFundo1.play()

    document.addEventListener('keydown', (keyPressed)=>{
        if (keyPressed.code == 'Space') {
            // Inicia o audio em 0.5 segundos
            marioPulando.currentTime = 0.6
            marioPulando.play()
            salto()
        }
    })
    
    // salto
    const salto = () =>{
        marioPersonagem.classList.add('salto')
        setTimeout(() => {
            marioPersonagem.classList.remove('salto')
        }, '600');
    }
    
    // game-over
    const andamento = setInterval(() =>{
        // pontuação
        // const pontos = setInterval(( ) => {
        //         pontuacao=pontuacao+1
        //         placar.innerHTML = `PONTOS: ${pontuacao}`
        //         if (pontuacao > pontosRecorde){
            //             pontosRecorde = pontuacao
        //             localStorage.setItem('pontosRecorde', JSON.stringify(pontosRecorde))
        //         }
        //         console.log(pontosRecorde)
        //     }, 1000);
        
        let pontosRecorde = JSON.parse(localStorage.getItem('pontosRecorde'))
        
        placar.innerHTML = ` <p class='pontos'> PONTOS: ${pontuacao} </p> `;
        const pontos = setInterval(() => {
            pontuacao = pontuacao + 1;
            localStorage.setItem('pontuacao', JSON.stringify(pontuacao));
            
            clearInterval(pontos)

            if (pontuacao > pontosRecorde) {
                pontosRecorde = pontuacao;
                localStorage.setItem('pontosRecorde', JSON.stringify(pontosRecorde));
            }
        }, 1000);
        
        // posições
            const encanamentoPosicao = encanamento.offsetLeft
            const nuvemPosicao = nuvem.offsetLeft
            const marioPosicao = +window.getComputedStyle(marioPersonagem).bottom.replace('px','')
            
            let gameOverColisinonStart = (224/1850) * window.innerWidth 
            let gameOverColisinonFinish = (115/1850) * window.innerWidth
            
            // let startMario = 0.15 * 150 
            // marioPersonagem.style.right = `${startMario}px`
            
            // 224
            if (encanamentoPosicao<=gameOverColisinonStart && marioPosicao<gameOverColisinonFinish ){
           
            marioPersonagem.setAttribute('src', '../images/game-over.png')
            
            // marioPersonagem.style.bottom = `${marioPosicao}px`
            marioPersonagem.style.width='90px'
            encanamento.style.animation = 'none'
            nuvem.style.animation='none'
            
            encanamento.style.left = `${encanamentoPosicao}px`
            nuvem.style.left = `${nuvemPosicao}px`
            
            marioPersonagem.style.scale = 0.9
            marioPersonagem.classList.add('gameOver')
            
            clearInterval(andamento)
            musicaFundo1.pause()
            gameOver.play()

        }
        
    }, 10)
// })



  

