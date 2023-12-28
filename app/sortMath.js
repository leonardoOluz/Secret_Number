const menorValor = 1;
const maiorValor = 10;
const secretNumber = gerarNumberAleatorio();

document.querySelector('#menor-valor').innerHTML = menorValor;
document.querySelector('#maior-valor').innerHTML = maiorValor;

function gerarNumberAleatorio(){
    return parseInt(Math.random() * maiorValor + 1);
}

console.log(`Secret number: ${secretNumber}`);