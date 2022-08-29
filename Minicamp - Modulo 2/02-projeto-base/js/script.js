function validaEntrada(args) {
  for (let i = 0; i < arguments.length; i++) {
    if (!!arguments[i] == false || arguments[i] < 0) {
      return false;
    }
  }
  return true;
}

function calcularIMC(kilos, altura) {
  altura = altura / 100;
  return (kilos / (altura * altura));
}

const formCalcularIMC = document.getElementById('form');

formCalcularIMC.addEventListener('submit', function (event) {
  event.preventDefault();

  const kilos = parseFloat(document.getElementById('kilos').value);
  const altura = parseFloat(document.getElementById('altura').value);

  if (validaEntrada(kilos, altura)) {
    const imc = calcularIMC(kilos, altura);
    document.getElementById('imc').value = parseFloat(imc).toFixed(2);
    verificarIMC(imc);
  } else {
    document.getElementById('imc').value = "## ERRO ##";
  }
});

function verificarIMC(imc) {

}

function createMessage(msg, type) {
  document
    .querySelector("body")
    .insertAdjacentHTML("beforebegin", `<div class='message ${type}'>${msg}</div>`);

  setTimeout(function () {
    deleteMessage();
  }, 3000);
}

function deleteMessage() {
  const list = document.querySelectorAll(".message");
  for (const item of list) {
    item.remove();
  }
}