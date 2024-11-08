/**
 * Simples simulador de uma lâmpada
 * @author Elen Grecco
 */

//variaveisde apois lógico
let chave = false // o interruptor inicia desligada
let lampada = true // a lâmpada está ok

// Pré carregamento de arquivo de áudio
let som = new Audio("sound/breaking-glass.mp3")

function quebrar() {
    if (lampada === true) {
        document.getElementById('lamp').src = "img/broken.jpg"
        //reproduzindo um arquivo de áudio no JS
        //Passo 1: copiar o arquivo de áudio para o projeto
        //Passo 2: usar a classe Audio (biblioteca interna do JS)
        //Passo 3: pré carregar o arquivo de áudio para sincronizar com a troca de imagem (Experêmcia do usúrio)
        som.play()
        // apoio a lógica para oJS identificar a lâmpada quebrada
        lampada = false
    }
}

function onoff() {
    if (chave === false) {
        document.getElementById('interruptor').src = "img/swon.png"
        chave = true // O JS agora sabe que a chave está ligada
        //verificar se a lâmpada está intacta antes de ascender
        if (lampada === true) {
            document.getElementById('lamp').src = "img/on.jpg"
        }

    } else {
        document.getElementById('interruptor').src = "img/swoff.png"
        chave = false
        //verificar se a lâmpada está intacta antes de ascender
        if (lampada === true) {
            document.getElementById('lamp').src = "img/off.jpg"
        }

    }
}

//Estudo de eventos relacionados a click do mouse (pressionado ou não pressionado) e telas touch
//Passo 1: Capturar os elementos do html (DOM)
const botao = document.getElementById('button')
const lampadaImg = document.getElementById('lamp')

//Passo 2: Manipular o evento mouse pressionado
//addEventListener ("esculta um evento em tempo real")
//mousedown (mouse pressionado constantimente)
//mouseup (soltar o botão do mouse)
//touchstart (tocar na tela e manter)
//touchend (deixar de pressionar a tela touch)

//pressionar o botão do mouse e manter
botao.addEventListener('mousedown', (event) => {
    event.preventDefault() //ignorar o comportamento padrão
    //console.log("botão do mouse pressionado")
    //se a lâmpada estiver intacta e o interruptor principal estiver desligado
    if (lampada === true && chave === false){
        lampadaImg.src = "img/on.jpg"
    }
})

//soltar o botão do mouse
botao.addEventListener('mouseup', (event) => {
    event.preventDefault()
    //console.log("botão do mouse solto")
    if (lampada === true && chave === false){
        lampadaImg.src = "img/off.jpg"
    }

})

//pressionar a tela toch e manter
botao.addEventListener('touchstart', (event) => {
    event.preventDefault()
    //console.log("tela pressionada")
    if (lampada === true && chave === false){
        lampadaImg.src = "img/on.jpg"
    }
})

//deixar de pressionar a tela touch
botao.addEventListener('touchend', (event) => {
    event.preventDefault()  
    //console.log("a tela não está sendo pressionada")
    if (lampada === true && chave === false){
        lampadaImg.src = "img/off.jpg"
    }
})
