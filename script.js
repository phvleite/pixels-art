window.onload = function() {

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

    let marcadores = document.getElementsByClassName('marcador');
    let paletasCores = document.getElementsByClassName('color');
    for (i = 0; i < paletasCores.length; i += 1) {
        if (i === 0) {
            paletasCores[i].style.backgroundColor = 'Black';
            paletasCores[i].classList.add('selected');
            marcadores[i].style.backgroundColor = 'Black'
            marcadores[i].classList.add('selecionado');
        } else {
            let corPaleta = `rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`
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
    for (i = 0; i < linhas.length; i += 1) {
        for (x = 0; x < 5; x += 1) {
            let pixel = document.createElement('div');
            pixel.setAttribute('class', 'pixel');
            pixel.setAttribute('id', `pixel${i}`);
            linhas[i].appendChild(pixel);
        }
    }

    function recebeClickColor(evento){
        if (evento.target.className != 'selected'){
            for (let i = 0; i < paletasCores.length; i += 1){
                if (paletasCores[i].className === 'color selected'){
                    document.getElementById(paletasCores[i].id).classList.remove('selected');
                    document.getElementById(marcadores[i].id).classList.remove('selecionado');
                    document.getElementById(marcadores[i].id).style.backgroundColor = 'White';
                    marcadores[i].style.borderColor = 'White'
                }
            };
            document.getElementById(evento.target.id).classList.add('selected');
            for (let i = 0; i < paletasCores.length; i += 1){
                if (paletasCores[i].className === 'color selected'){
                    marcadores[i].classList.add('selecionado');
                    marcadores[i].style.backgroundColor = paletasCores[i].style.backgroundColor;
                    marcadores[i].style.borderColor = 'Black'
                }
            };
        }
    }
    
    for (let i = 0; i < paletasCores.length; i += 1){
        paletasCores[i].addEventListener('click', recebeClickColor);
    }
    
}
