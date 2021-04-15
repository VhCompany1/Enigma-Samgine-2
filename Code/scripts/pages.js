function indexpage() {
    let corpo = window.document.getElementById('corpo')

    corpo.innerHTML = `
    <div id="corpo">
        <img src="https://cdn.discordapp.com/attachments/825951876725866517/830286603268128778/animation.gif" alt="" class="animation">
        <h1>Seja bem vindo...</h1>

        <img src="https://cdn.discordapp.com/attachments/825951876725866517/830285945315786782/LogoSamgine.png" alt="">
        <!--<img src="midia/img/morto.png" class="mao">-->

        <br><input type="button" value="Start" onclick="text()" class="botao">

        <br><br><input type="button" value="Config" onclick="configmenu()" class="botao">
        <br><br><input type="button" value="Creditos" onclick="creditosmenu()" class="botao">
    </div>
    `
}