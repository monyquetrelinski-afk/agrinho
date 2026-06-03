// Contador animado

let valor = 0;
const alvo = 5000;

const contador = setInterval(() => {

    valor += 50;

    document.getElementById("contador").innerText = valor;

    if (valor >= alvo) {
        clearInterval(contador);
    }

}, 20);


// Função do botão

function mostrarMensagem() {

    document.getElementById("mensagem").innerHTML =
        "🌱 O futuro depende da união entre tecnologia, sustentabilidade e cooperação entre o campo e a cidade.";

}