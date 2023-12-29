const elementoChute = document.querySelector('#chute');
let chute = '';

window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    console.log(e.results[0][0].transcript)
    exibeChuteNaTela(chute);
    varificarChuteValido(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você Disse:</div>
    <span class="box">${chute}</span>
    `;
}

recognition.addEventListener('end', ()=> recognition.start());
