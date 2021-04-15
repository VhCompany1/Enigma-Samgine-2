function configmenu() {
    let corpo = window.document.getElementById('corpo')

    corpo.innerHTML = ''

    corpo.innerHTML = '<center><div class="menu"></div></center>'

    let div = window.document.querySelector('.menu')

    div.innerHTML = '<h1>CONFIGURAÇÕES</h1>'

    div.innerHTML += '<p><input type="number" name="codigodeparada" id="codigo" class="res" placeholder="Codigo de parada" max="9999"></p>'

    div.innerHTML += '<h2>Fonte</h2>'
    div.innerHTML += '<p>Normal: <input type="radio" name="font" id="fnormal" checked></p>'
    div.innerHTML += '<p<<br>Adaptavel: <input type="radio" name="font" id="fadaptavel"></p>'

    div.innerHTML += '<h2>Tema</h2>'
    div.innerHTML += '<p>Escuro: <input type="radio" name="tema" id="Escuro" checked></p'
    div.innerHTML += '<p>Claro: <input type="radio" name="tema" id="Claro"></p>'

    div.innerHTML += '<h2>Audio</h2>'
    div.innerHTML += `<p>Volume:</p>
        <select class="res">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
        <select>
    `
    div.innerHTML += `<p>Ligado:</p> 
        <select class="res" id="l">
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
        <select><br>
    `

    div.innerHTML += '<p><input type="button" name="salvar" value="Salvar" class="botao" onclick="save()"></p>'
    div.innerHTML += '<p><input type="button" name="cancelar" value="Cancelar" class="botao" onclick="canceled()"></p>'
}

function save() {

    //codigo de parada
    let code = window.document.getElementById('codigo').value

    if (code == 'as not') {
        window.alert('parada1')
        window.fase = 2
        start()
    } else if (code == 'as not') {
        window.alert('parada2')
        window.fase = 3
        start()
    } else if (code == 'as not') {
        window.alert('parada3')
        window.fase = 4
        start()
    } else if (code == 'as not') {
        window.alert('parada4')
        window.fase = 5
        start()
    } else if (code.length == 0) {
        let nselect = 1
    } else {
        window.alert('Codigo de parada ainda não disponivel')
    }

    //fonte edit
    let fcaixa1 = window.document.getElementById('fnormal')
    let fcaixa2 = window.document.getElementById('fadaptavel')

    if (fcaixa1.checked == true) {
        window.fonte = 'no'
        fontedit()
    } else if (fcaixa2.checked == true) {
        window.fonte = 'ad'
        fontedit()
    } else {
        window.alert('nada')
    }

    //tema edit
    let es = window.document.getElementById('Escuro')
    let cl = window.document.getElementById('Claro')

    if (es.checked == true) {
        window.tema = 'es'
        temaedit()
    } else if (cl.checked == true) {
        window.tema = 'cl'
        temaedit()
    } else {
        window.alert('nada')
    }

    //audio edit
    let audios = window.document.getElementById('audios')
    let l = window.document.querySelector('#l')

    if (l.value == 'Não') {
        audios.innerHTML = ''
    } else {
        if (audios.innerHTML == '') {
            audios.innerHTML = `
                <audio src="https://cdn.discordapp.com/attachments/825951876725866517/830998599243399168/She_Died_Up_There_You_Know_-_Dan_Bodan.mp3" id="trilha" loop autoplay class="sound"></audio>
                <audio src="https://cdn.discordapp.com/attachments/825951876725866517/830998531220307999/StartSound.mp3" id="StartSound" class="sound"></audio>
            `
        } else {}
    }

    //Index
    indexpage()
}

function canceled() {
    indexpage()
}