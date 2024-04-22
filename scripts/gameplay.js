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
const telaDeJogo = document.querySelector('#janela_jogo')
const telaFinal = document.querySelector('.final')
const partidaPontos = document.getElementById('final-pontuacao')
const recordePontos = document.getElementById('maior-pontuacao')

let setTempoEncanamento = telaDeJogo.offsetWidth > 375 ? telaDeJogo.offsetWidth/550 : telaDeJogo.offsetWidth/250 
let setTempoNuvens = telaDeJogo.offsetWidth/50
let setTempoPuloMario = telaDeJogo.offsetWidth/1200
let setTamanhoNuvens = telaDeJogo.offsetWidth > 375 ? 0.3 : 0.6

let variaveisCss = document.documentElement.style

variaveisCss.setProperty('--tempo-nuvem', `${setTempoNuvens}s`)
variaveisCss.setProperty('--tempo-encanamento', `${setTempoEncanamento}s`)
variaveisCss.setProperty('--nuvem-scale', `${setTamanhoNuvens}`)
variaveisCss.setProperty('--nuvem-scale', `${setTempoPuloMario}`)

let pontuacao = 0
let pontosRecorde = 0
let historico


function iniciarJogo() {
    

    musicaFundo1.play()
    
        document.addEventListener('keydown', (keyPressed)=>{
            if (keyPressed.code == 'Space') {
                // Inicia o audio em 0.5 segundos
                marioPulando.currentTime = 0.6
                marioPulando.play()
                salto()
            }
        })
    
        document.addEventListener('click', ()=>{
            // Inicia o audio em 0.5 segundos
            marioPulando.currentTime = 0.6
            marioPulando.play()
            salto()
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
                // placar.innerHTML = pontosRecorde
            }, 1000);
            
    
            // posições
                const encanamentoPosicao = encanamento.offsetLeft
                const nuvemPosicao = nuvem.offsetLeft
                const marioPosition = window.getComputedStyle(marioPersonagem)
                const pipePosition = window.getComputedStyle(encanamento)
    
                const pipeColisionSet = +pipePosition.left.replace('px', '') 
                const marioColision = +marioPosition.left.replace('px', '') + marioPersonagem.offsetWidth * ( 1 - 0.25)
                
                const marioJumpColision = +marioPosition.bottom.replace('px', '')
                const pipeHeight = encanamento.offsetHeight
                const startMarioLeft = marioPersonagem.offsetLeft
    
            if (pipeColisionSet <= marioColision && marioJumpColision < pipeHeight && pipeColisionSet > startMarioLeft) {
               
                marioPersonagem.setAttribute('src', '../images/game-over.png')
                marioPersonagem.style.width=`${0.60*marioPersonagem.offsetWidth}px`
                marioPersonagem.style.left = `${marioColision - marioPersonagem.offsetWidth * (1 - 0.1)}px`
    
                encanamento.style.animation = 'none'
                nuvem.style.animation='none'
                
                encanamento.style.left = `${encanamentoPosicao}px`
                nuvem.style.left = `${nuvemPosicao}px`
                
                marioPersonagem.style.scale = 0.9
                marioPersonagem.classList.add('gameOver')
                
                clearInterval(andamento)
                musicaFundo1.pause()
                gameOver.play()
    
                const final = setTimeout(() =>{
                    telaFinal.style.display = 'flex'
                    if(pontuacao >= pontosRecorde){
                        partidaPontos.innerHTML = `<p> PARABÉNS! VOCÊ BATEU UM NOVO RECORDE</p>`
                        recordePontos.innerHTML = `<p> SEU NOVO RECORDE É: ${pontuacao} </p>`
                    } else{
                    partidaPontos.innerHTML = `<p> SUA QUANTIDADE DE PONTOS FOI: ${pontuacao} </p>`
                    recordePontos.innerHTML = `<p> RECORDE: ${pontosRecorde} </p>`
                    }
                },2000)
            }
    
        }, 10)
      
    }
    

// Colocar o código dentro desse evento
document.addEventListener('iniciarJogo', () => {
    iniciarJogo()
})

document.addEventListener('keypress', (keyPressed) => {
    if (keyPressed.code == 'KeyR') {
        iniciarJogo();
    }
});

