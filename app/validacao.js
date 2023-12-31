function varificarChuteValido(chute) {
    const numero = +chute;
    if (chuteForInvalido(numero)) {
        if (chute.toUpperCase() === 'GAME OVER.' || chute.toUpperCase() === 'GAME OVER') {
            document.body.innerHTML = `
            <h2>Fim do Jogo !</h2>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente ?</button>
            `;
        } else {
            elementoChute.innerHTML += '<div>Valor inválido!</div>';
            return
        }
    }
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre: ${menorValor} e ${maiorValor}</div>`;
        return
    }
    if (numero === secretNumber) {
        document.body.innerHTML = `
        <h2>Você acertou !</h2>
        <h3>O numero secreto é ${secretNumber} !</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente ?</button>
        `;
    } else if (numero > secretNumber) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-angles-down"></i></div>        
        `;
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-angles-up"></i></div>
        `;
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
});