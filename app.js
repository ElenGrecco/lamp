/**
 * Simples simulador de uma lâmpada
 * @author Elen Grecco
 */

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
   document.getElementById('interruptor').src="img/swon.png"
}