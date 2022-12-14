var state = {board: [], currentGame: [], savedGames: []}

function start(){
  createBoard();
  newGame();
  
}

function createBoard(){
  state.board = [];

  for(var i = 1; i <= 60; i++){
    state.board.push(i)
  }
}

function newGame(){
  resetGame();
  render();

}

function render(){

  renderBoard();
  renderButtons();
  renderSavedGames();
}

function renderBoard(){
  var divBoard = document.querySelector('#megasena-board');
  divBoard.innerHTML = '';

  var ulNumbers = document.createElement('ul');
  ulNumbers.classList.add('numbers');

  for (var i = 0; i < state.board.length; i++) {
    var currentNumber = state.board[i];

    var liNumbers = document.createElement('li');
    liNumbers.textContent = currentNumber;
    liNumbers.classList.add('number');

    liNumbers.addEventListener('click', handleNumberClick);

    if (isNumberInGame(currentNumber)){
      liNumbers.classList.add('selectedNumber');
    }

    ulNumbers.appendChild(liNumbers);
  }

  divBoard.appendChild(ulNumbers);
}

function handleNumberClick(event){
  var value = Number(event.currentTarget.textContent);

  if(isNumberInGame(value)){
    removeNumberFromGame(value);
  }else{
    addNumberToGame(value);
  }
  render();

}

function renderButtons(){
  var divButtons = document.querySelector('#megasena-buttons');
  divButtons.innerHTML = '';

  var buttonNewGame = createNewGameButton();
  var buttonRandomGame = createButtonRandomGame();
  var buttonSaveGame = createSaveGameButton();

  divButtons.appendChild(buttonNewGame);
  divButtons.appendChild(buttonRandomGame);
  divButtons.appendChild(buttonSaveGame);
}

function createButtonRandomGame(){
  var button = document.createElement('button');
  button.textContent = 'Jogo Aleatório'

  button.addEventListener('click', randomGame)

  return button;
}

function createNewGameButton(){

  var button = document.createElement('button');
  button.textContent = 'Novo Jogo';

  button.addEventListener('click', newGame);
  
  return button;
  
}

function createSaveGameButton(){
  var button = document.createElement('button');
  button.textContent = 'Salvar Jogo';
  button.disabled = !isGameComplete();

  button.addEventListener('click', saveGame);

  return button

}

function renderSavedGames(){
  var divSavedGames = document.querySelector('#megasena-saved-games');
  divSavedGames.innerHTML = ''

  if(state.savedGames.length === 0){
    divSavedGames.innerHTML = '<p>Nenhum jogo salvo</p>';
  }else {
    var ulSavedGames = document.createElement('ul');

    for (var i = 0; i < state.savedGames.length; i++){
      var currentGame = state.savedGames[i];

      var liGame = document.createElement('li');
      liGame.textContent = currentGame.join(', ');
      
      liGame.classList.add('saved-games');

      ulSavedGames.appendChild(liGame);
    }
    divSavedGames.appendChild(ulSavedGames);
  }
}

function addNumberToGame(numberToAdd){
  if(numberToAdd < 1 || numberToAdd > 60){
    console.error('Número Inválido', numberToAdd);
    return;
  }
  if(state.currentGame.length >= 6){
    console.error('O jogo já está completo.', numberToAdd);
    return;
  }
  if(isNumberInGame(numberToAdd)){
    console.error('Este numéro já está no jogo.');
    return
  }
  state.currentGame.push(numberToAdd);
}

function removeNumberFromGame(numberToRemove){
  if(numberToRemove < 1 || numberToRemove > 60){
    console.error('Número inválido', numberToRemove);
    return
  }
  var newGame = []
  for(var i = 0; i < state.currentGame.length; i++) {
    var currentNumber = state.currentGame[i];

    if (currentNumber === numberToRemove){
      continue;
    }
    newGame.push(currentNumber);
  }
  state.currentGame = newGame;
}

function isNumberInGame(numberToCheck){
 /* if(state.currentGame.includes(numberToCheck)){
    return true;
  }
    return false;*/

  return state.currentGame.includes(numberToCheck);
}

function saveGame(){
  if(!isGameComplete()){
    console.error('O jogo não está completo!');
    return;
  }

  state.savedGames.push(state.currentGame);
  newGame();

}

function isGameComplete(){
  return state.currentGame.length === 6;
}

function resetGame(){
  state.currentGame = [];
}

function randomGame(){
  resetGame();

  while(!isGameComplete()){
    var randomNumber = Math.ceil(Math.random() * 60);
    addNumberToGame(randomNumber);
  }

 render();
}

start();