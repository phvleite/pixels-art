window.onload = function () {

    let paleta = document.getElementById('color-palette')
    for (i = 1; i < 5; i += 1) {
        let paletaCor = document.createElement('div');
        paletaCor.setAttribute("id", `paleta${i}`);
        paletaCor.setAttribute("class", "color");
        paleta.appendChild(paletaCor);
    }
    let marcador = document.getElementById('color-selected')
    for (i = 1; i < 5; i += 1) {
        let marcadorSelecionado = document.createElement('div');
        marcadorSelecionado.setAttribute('id', `selecinado${i}`);
        marcadorSelecionado.setAttribute('class', 'marcador');
        marcador.appendChild(marcadorSelecionado);
    }

    let paintColor = "";
    let marcadores = document.getElementsByClassName('marcador');
    let paletasCores = document.getElementsByClassName('color');
    for (i = 0; i < paletasCores.length; i += 1) {
        if (i === 0) {
            paletasCores[i].style.backgroundColor = 'Black';
            paletasCores[i].classList.add('selected');
            marcadores[i].style.backgroundColor = 'Black'
            marcadores[i].classList.add('selecionado');
            paintColor = marcadores[i].style.backgroundColor
        } else {
            let corPaleta = `rgb(${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)})`
            paletasCores[i].style.backgroundColor = corPaleta;
            marcadores[i].style.backgroundColor = 'White';
        }
    }

    let quadro = document.getElementById('pixel-board');
    for (i = 0; i < 5; i += 1) {
        let linha = document.createElement('div');
        linha.setAttribute('class', 'linha-quadro');
        quadro.appendChild(linha);
    }

    let linhas = document.getElementsByClassName('linha-quadro');
    let pxl = 0;
    for (i = 0; i < linhas.length; i += 1) {
        for (x = 0; x < 5; x += 1) {
            let pixel = document.createElement('div');
            pixel.setAttribute('class', 'pixel');
            pixel.setAttribute('id', `pixel${pxl}`);
            pixel.style.backgroundColor = 'rgb(255,255,255)'
            linhas[i].appendChild(pixel);
            pxl += 1;
        }
    }


    function recebeClickColor(evento) {
        if (evento.target.className != 'selected') {
            for (let i = 0; i < paletasCores.length; i += 1) {
                if (paletasCores[i].className === 'color selected') {
                    document.getElementById(paletasCores[i].id).classList.remove('selected');
                    document.getElementById(marcadores[i].id).classList.remove('selecionado');
                    document.getElementById(marcadores[i].id).style.backgroundColor = 'White';
                    marcadores[i].style.borderColor = 'White'
                }
            };
            document.getElementById(evento.target.id).classList.add('selected');
            paintColor = document.getElementById(evento.target.id).style.backgroundColor
            for (let i = 0; i < paletasCores.length; i += 1) {
                if (paletasCores[i].className === 'color selected') {
                    marcadores[i].classList.add('selecionado');
                    marcadores[i].style.backgroundColor = paletasCores[i].style.backgroundColor;
                    marcadores[i].style.borderColor = 'Black'
                }
            };
        }
    }

    function clearPixels() {
        for (i = 0; i < pixels.length; i += 1) {
            pixels[i].style.backgroundColor = "rgb(255,255,255";
            paintColor = "rgb(255,255,255";
            console.log(`${pixels[i].id} - ${pixels[i].style.backgroundColor}`)
        }
        for (let i = 0; i < paletasCores.length; i += 1) {
            document.getElementById(paletasCores[i].id).classList.remove('selected');
            document.getElementById(marcadores[i].id).classList.remove('selecionado');
            document.getElementById(marcadores[i].id).style.backgroundColor = 'White';
            marcadores[i].style.borderColor = 'White'
        };
    }

    function selectPixel(evento) {
        pixelPaint = document.getElementById(evento.target.id);
        pixelSelectPaint(pixelPaint, paintColor);
    }

    function pixelSelectPaint(pixelPaint, paintColor) {
        pixelPaint.style.backgroundColor = paintColor;
    }

    for (let i = 0; i < paletasCores.length; i += 1) {
        paletasCores[i].addEventListener('click', recebeClickColor);
    }

    let pixels = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixels.length; i += 1) {
        pixels[i].addEventListener('click', selectPixel);
    }

    clearButton = document.getElementById('clear-board')
    clearButton.addEventListener('click', clearPixels);

}
