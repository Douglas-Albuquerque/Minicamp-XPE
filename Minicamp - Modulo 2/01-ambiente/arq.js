function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc')
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculateImc() {
  const weight = document.getElementById('input-weight').value;
  const height = document.getElementById('input-height').value;
  const imcValue = (weight / (height * height)).toFixed(2).replace('.', ',');;
  var classification = '';

  if (imcValue < 17) {
    classification = "Muito abaixo do peso"
  } else if (imcValue > 17 && imcValue <= 18.49) {
    classification = "Abaixo do peso"
  } else if (imcValue >= 18.5 && imcValue <= 24.99) {
    classification = "Peso normal"
  } else if (imcValue >= 25 && imcValue <= 29.99) {
    classification = "Acima do peso"
  } else if (imcValue >= 30 && imcValue <= 34.99) {
    classification = "Obesidade I"
  } else {
    classification = "Obesidade II"
  }
  console.log(classification);
  return imcValue;

}

function handleButtonClick() {
  // var inputWeight = document.querySelector('#input-weight');
  // var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imcResult');

  // var weight = Number(inputWeight.value);
  // var height = Number(inputHeight.value);

  var imc = calculateImc();

  imcResult.textContent = imc;


}

start();

// function calculateImc(weight, height) {
//   return weight / (height * height)

// }