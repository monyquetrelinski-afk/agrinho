function corrigirQuiz(){

    let pontos = 0;

    let q1 = document.querySelector(
        'input[name="q1"]:checked'
    );

    let q2 = document.querySelector(
        'input[name="q2"]:checked'
    );

    if(!q1 || !q2){
        document.getElementById("resultado").innerHTML =
        "⚠️ Responda todas as perguntas.";
        return;
    }

    if(q1.value === "certo"){
        pontos++;
    }

    if(q2.value === "certo"){
        pontos++;
    }

    let mensagem = "";

    if(pontos === 2){
        mensagem =
        "🏆 Excelente! Você domina o tema Agro Sustentável.";
    }
    else if(pontos === 1){
        mensagem =
        "🌿 Muito bem! Você acertou metade das questões.";
    }
    else{
        mensagem =
        "📚 Continue estudando sobre sustentabilidade e inovação no campo.";
    }

    document.getElementById("resultado").innerHTML =
    `Você fez ${pontos}/2 pontos.<br><br>${mensagem}`;
}