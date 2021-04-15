function creditosmenu() {
    let corpo = window.document.getElementById('corpo')

    corpo.innerHTML = ''

    corpo.innerHTML = '<center><div class="menuc"></div></center>'

    let div = window.document.querySelector('.menuc')

    div.innerHTML = '<h1>Creditos</h1>'

    div.innerHTML += '<h2>Programador:</h2>'

    div.innerHTML += '<p>Discord:VhCompany#9999</p>'
    div.innerHTML += '<p>GitHub: <a href="https://github.com/VhCompany1" class="link">link</a></p>'

    div.innerHTML += '<h2>Desenvolvedor de Enigmas:'

    div.innerHTML += '<p>Discord:VhCompany#9999</p>'
    div.innerHTML += '<p>GitHub: <a href="https://github.com/VhCompany1" class="link">link</a></p>'

    div.innerHTML += '<h2>Beta Tester Oficial:'

    div.innerHTML += '<p>Discord:gcmarloko#4496</p>'
    div.innerHTML += '<p>Twitch: <a href="https://twitch.tv/omarozzi" class="link">link</a></p>'

    div.innerHTML += '<input type="button" value="Voltar" class="botao" onclick="indexpage()">'
}