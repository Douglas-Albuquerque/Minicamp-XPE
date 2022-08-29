function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc')
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  // var inputWeight = document.querySelector('#input-weight');
  // var inputHeight = document.querySelector('#input-height');

  // inputWeight.addEventListener('input', handleButtonClick);
  // inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();

}

function calculateImc(weight, height) {
  return weight / (height * height)
}
function validateImc() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);
  var imc = calculateImc(weight, height);

  let classification = '';

  if (imc < 17) {
    classification = "Muito abaixo do peso"
  } else if (imc > 17 && imc < 18.49) {
    classification = "Abaixo do peso"
  } else if (imc >= 18.5 && imc < 24.99) {
    classification = "com Peso normal"
  } else if (imc >= 25 && imc < 29.99) {
    classification = "Acima do peso"
  } else if (imc >= 30 && imc < 34.99) {
    classification = "com Obesidade I"
  } else {
    classification = "com Obesidade II"
  }

  return classification

}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imcResult');
  var alertResult = document.querySelector('#alertResult');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');
  var validationresult = validateImc();

  imcResult.textContent = formattedImc;
  alertResult.textContent = validationresult;


}

start();