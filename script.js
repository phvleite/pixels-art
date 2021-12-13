window.onload = function() {

    let paleta = document.getElementById('color-palette')
    for (i = 1; i < 5; i += 1) {
        let paletaCor = document.createElement('div');
        paletaCor.setAttribute("id", `paleta${i}`);
        paletaCor.setAttribute("class", "color");
        paleta.appendChild(paletaCor);
    }
    
    let paletasCores = document.getElementsByClassName('color');
    for (i = 0; i < paletasCores.length; i += 1) {
        if (i === 0) {
            paletasCores[i].style.backgroundColor = 'Black';
        } else {
            let corPaleta = `rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`
            paletasCores[i].style.backgroundColor = corPaleta;
        }
    }

    let quadro = document.getElementById('pixel-board');
    for (i = 0; i < 5; i += 1) {
        let linha = document.createElement('div');
        linha.setAttribute('class', 'linha-quadro');
        quadro.appendChild(linha);
    }

    let linhas = document.getElementsByClassName('linha-quadro');
    for (i = 0; i < linhas.length; i += 1) {
        for (x = 0; x < 5; x += 1) {
            let pixel = document.createElement('div');
            pixel.setAttribute('class', 'pixel');
            linhas[i].appendChild(pixel);
        }
    }
}
