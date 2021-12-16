const paleta = document.getElementById('color-palette');
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
    paintColor = marcadores[i].style.backgroundColor;
  } else {
    // eslint-disable-next-line radix
    const r = (Math.random() * 255).toFixed(0);
    const g = (Math.random() * 255).toFixed(0);
    const b = (Math.random() * 255).toFixed(0);
    const corPaleta = `rgb(${r},${g},${b})`;
    paletasCores[i].style.backgroundColor = corPaleta;
    marcadores[i].style.backgroundColor = 'White';
  }
}

const quadro = document.getElementById('pixel-board');
for (let i = 0; i < 5; i += 1) {
  const linha = document.createElement('div');
  linha.setAttribute('class', 'linha-quadro');
  quadro.appendChild(linha);
}

const linhas = document.getElementsByClassName('linha-quadro');
let pxl = 0;
for (let i = 0; i < linhas.length; i += 1) {
  for (let x = 0; x < 5; x += 1) {
    const pixel = document.createElement('div');
    pixel.setAttribute('class', 'pixel');
    pixel.setAttribute('id', `pixel${pxl}`);
    pixel.style.backgroundColor = 'rgb(255,255,255)';
    linhas[i].appendChild(pixel);
    pxl += 1;
  }
}

function removeMarcador(remMarcador) {
  document.getElementById(remMarcador.id).classList.remove('selecionado');
  document.getElementById(remMarcador.id).style.backgroundColor = 'White';
  document.getElementById(remMarcador.id).style.borderColor = 'White';
}

function adcionaMarcador(addMarcador) {
  document.getElementById(addMarcador.id).classList.add('selecionado');
  document.getElementById(addMarcador.id).style.backgroundColor = paintColor;
  document.getElementById(addMarcador.id).style.borderColor = 'Black';
}

function recebeClickColor(evento) {
  if (evento.target.className !== 'color selected') {
    for (let i = 0; i < paletasCores.length; i += 1) {
      if (paletasCores[i].className === 'color selected') {
        document.getElementById(paletasCores[i].id).classList.remove('selected');
        removeMarcador(marcadores[i]);
      }
    }
  }
  document.getElementById(evento.target.id).classList.add('selected');
  paintColor = document.getElementById(evento.target.id).style.backgroundColor;
  adcionaMarcador(marcadores[(evento.target.id) - 1]);
}

function pixelSelectPaint(pixelPaint, paintCollor) {
  pixelPaint.style.backgroundColor = paintCollor;
}

function selectPixel(evento) {
  const pixelPaint = document.getElementById(evento.target.id);
  pixelSelectPaint(pixelPaint, paintColor);
}

const pixels = document.getElementsByClassName('pixel');
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', selectPixel);
}

function clearPixels() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'rgb(255,255,255';
    paintColor = 'rgb(255,255,255';
  }
  for (let i = 0; i < paletasCores.length; i += 1) {
    document.getElementById(paletasCores[i].id).classList.remove('selected');
    document.getElementById(marcadores[i].id).classList.remove('selecionado');
    document.getElementById(marcadores[i].id).style.backgroundColor = 'White';
    marcadores[i].style.borderColor = 'White';
  }
}

for (let i = 0; i < paletasCores.length; i += 1) {
  paletasCores[i].addEventListener('click', recebeClickColor);
}

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearPixels);
