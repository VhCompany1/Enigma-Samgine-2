let corpo = window.document.getElementById('corpo')
let body = window.document.querySelector('body')

function fontedit() {
    if (window.fonte == "no") {
        corpo.style.color = 'black'
    }
    if (window.fonte == "ad") {
        corpo.style.color = 'red'
    } else {}
}

function temaedit() {
    if (window.tema == "es") {
        body.style.backgroundColor = 'black'
    }
    if (window.tema == "cl") {
        body.style.backgroundColor = 'white'
    } else {}
}//.