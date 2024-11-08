/**
 * Simples simulador de uma lâmpada
 * @author Elen Grecco
 */

//variaveisde apois lógico
let chave

function quebrar() {
    
    //reproduzindo um arquivo de áudio no JS
    //Passo 1: copiar o arquivo de áudio para o projeto
    //Passo 2: usar a classe Audio (biblioteca interna do JS)
    let som = new Audio()
    som.src = "sound/glassbreaking.wav"
    som.play()
    document.getElementById('lamp').src="img/broken.jpg"
}

function onoff() {
    if(chave === false){
        document.getElementById('interruptor').src="img/swon.png"
        chave = true // O JS agora sabe que a chave está ligada
    } else {

    }
    }
   