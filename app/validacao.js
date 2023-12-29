function varificarChuteValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido!</div>';
        return
    }
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre: ${menorValor} e ${maiorValor}</div>`;
        return
    }
    if (numero === secretNumber) {
        document.body.innerHTML = `
        <h2>Você acertou !</h2>
        <h3>O numero secreto é ${secretNumber} !</h3>
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