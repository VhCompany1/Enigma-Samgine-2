function text() {
    let corpo = window.document.getElementById('corpo')

    let title = window.document.querySelector('title')

    title.innerHTML = '...'

    corpo.innerHTML = ''

    corpo.innerHTML += '<h1>Você foi rapitado</h1><br>'
    corpo.innerHTML += '<h2>AVISO!de preferencia use navegadores que permitem autoplay firefox ou edge.</h2>'

    corpo.innerHTML += `Historia...(em desenvolvimento)`

    corpo.innerHTML += '<br><input type="text" name="" id="n" class="res" placeholder="Seu nome"><br>'
    corpo.innerHTML += '<br><input type="button" value="Começar" onclick="start()" class="botao">'
}

function start() {
    let corpo = window.document.getElementById('corpo')

    let title = window.document.querySelector('title')

    let audio = window.document.getElementById('StartSound')
    if (audio == undefined) {} else {
        audio.play()
    }

    window.name = window.document.getElementById('n').value

    title.innerHTML = 'Fase 1'

    corpo.innerHTML = ''

    corpo.innerHTML = '<h1>Estamos apenas começando...</h1>'
    corpo.innerHTML += '<img src="https://cdn.discordapp.com/attachments/825951876725866517/830286604819365951/bandeiracanada.png" alt="Bandeira do canada">'
    corpo.innerHTML += '<br><input type="text" name="" id="res" class="res" placeholder="Resposta...">'
    corpo.innerHTML += '<br><br><input type="button" value="Responder" onclick="rodadas()" class="botao">'

    if (window.name == "") {
        window.alert('Você precisa nos dizer seu nome para proseguir')
        text()
    }
}