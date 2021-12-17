const corFundoMarcador = 'rgb(220,220,220)';
const paleta = document.getElementById('color-palette');
const tamanhoBorda = '1px';
let qtdPixels = 5;

for (let i = 1; i < 5; i += 1) {
  const paletaCor = document.createElement('div');
  paletaCor.setAttribute('id', `${i}`);
  paletaCor.setAttribute('class', 'color');
  paleta.appendChild(paletaCor);
}

const marcador = document.getElementById('color-selected');
for (let i = 1; i < 5; i += 1) {
  const marcadorSelecionado = document.createElement('div');
  marcadorSelecionado.setAttribute('id', `selecinado${i}`);
  marcadorSelecionado.setAttribute('class', 'marcador');
  marcador.appendChild(marcadorSelecionado);
}

let paintColor = '';
const marcadores = document.getElementsByClassName('marcador');
const paletasCores = document.getElementsByClassName('color');
for (let i = 0; i < paletasCores.length; i += 1) {
  if (i === 0) {
    paletasCores[i].style.backgroundColor = 'Black';
    paletasCores[i].classList.add('selected');
    marcadores[i].style.backgroundColor = 'Black';
    marcadores[i].classList.add('selecionado');
    paintColor = paletasCores[i].style.backgroundColor;
  } else {
    const r = (Math.random() * 255).toFixed(0);
    const g = (Math.random() * 255).toFixed(0);
    const b = (Math.random() * 255).toFixed(0);
    const corPaleta = `rgb(${r},${g},${b})`;
    paletasCores[i].style.backgroundColor = corPaleta;
    marcadores[i].style.backgroundColor = corFundoMarcador;
  }
}

function selectPixel(evento) {
  const pixelPaint = document.getElementById(evento.target.id);
  pixelPaint.style.backgroundColor = paintColor;
}

function atribuiClick() {
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', selectPixel);
  }
}

function removeQuadro() {
  const pixelBoard = document.getElementsByClassName('pixel');
  console.log(pixelBoard.length);
  for (let i = pixelBoard.length - 1; i >= 0; i -= 1) {
    pixelBoard[i].parentElement.removeChild(pixelBoard[i]);
  }
  const linhaBoard = document.getElementsByClassName('linha-quadro');
  for (let i = linhaBoard.length - 1; i >= 0; i -= 1) {
    linhaBoard[i].parentElement.removeChild(linhaBoard[i]);
  }
}

function criaQuadro() {
  removeQuadro();
  const quadro = document.getElementById('pixel-board');
  let pxl = 0;
  for (let linha = 0; linha < qtdPixels; linha += 1) {
    const linhaPixel = document.createElement('div');
    linhaPixel.setAttribute('class', 'linha-quadro');
    quadro.appendChild(linhaPixel);
    const colunaPixel = document.getElementById('pixel-board').lastChild;
    for (let coluna = 0; coluna < qtdPixels; coluna += 1) {
      const pixel = document.createElement('div');
      pixel.setAttribute('class', 'pixel');
      pixel.setAttribute('id', `pixel${pxl}`);
      pixel.style.backgroundColor = 'white';
      colunaPixel.appendChild(pixel);
      pxl += 1;
    }
  }
  atribuiClick();
}

criaQuadro();

function removeMarcador(remMarcador) {
  document.getElementById(remMarcador.id).classList.remove('selecionado');
  document.getElementById(remMarcador.id).style.backgroundColor = corFundoMarcador;
  document.getElementById(remMarcador.id).style.borderColor = corFundoMarcador;
}

function adcionaMarcador(addMarcador) {
  document.getElementById(addMarcador.id).classList.add('selecionado');
  document.getElementById(addMarcador.id).style.backgroundColor = paintColor;
  document.getElementById(addMarcador.id).style.borderColor = 'Black';
}

function alteraSelecionado() {
  for (let i = 0; i < paletasCores.length; i += 1) {
    if (paletasCores[i].className === 'color selected') {
      document.getElementById(paletasCores[i].id).classList.remove('selected');
      removeMarcador(marcadores[i]);
    }
  }
}

function recebeClickColor(evento) {
  if (evento.target.className !== 'color selected') {
    alteraSelecionado();
  }
  document.getElementById(evento.target.id).classList.add('selected');
  paintColor = document.getElementById(evento.target.id).style.backgroundColor;
  adcionaMarcador(marcadores[(evento.target.id) - 1]);
}

function clearPixels() {
  const pixelsBoard = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelsBoard.length; i += 1) {
    pixelsBoard[i].style.backgroundColor = 'rgb(255,255,255';
    paintColor = 'rgb(255,255,255';
    pixelsBoard[i].style.borderWidth = tamanhoBorda;
  }
  for (let i = 0; i < paletasCores.length; i += 1) {
    document.getElementById(paletasCores[i].id).classList.remove('selected');
    document.getElementById(marcadores[i].id).classList.remove('selecionado');
    document.getElementById(marcadores[i].id).style.backgroundColor = corFundoMarcador;
    marcadores[i].style.borderColor = corFundoMarcador;
  }
}

function criaPixels() {
  parseInt(qtdPixels, 10);
  if (qtdPixels === false || qtdPixels === 0 || qtdPixels < 5) {
    alert('Board inválido!');
    return;
  }
  if (qtdPixels > 50) {
    qtdPixels = 50;
  }
  criaQuadro();
}

function verificaVazioPixels() {
  qtdPixels = document.getElementById('board-size').value;
  if (qtdPixels === '') {
    alert('Board inválido!');
    return;
  }
  criaPixels();
}

for (let i = 0; i < paletasCores.length; i += 1) {
  paletasCores[i].addEventListener('click', recebeClickColor);
}

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearPixels);

const boardButton = document.getElementById('generate-board');
boardButton.addEventListener('click', verificaVazioPixels);
