
function calcularMedia() {
    const nome = document.getElementById("nome").value.trim();

    const nota1 = document.getElementById("nota1").value;
    const nota2 = document.getElementById("nota2").value;
    const nota3 = document.getElementById("nota3").value;

    const resultado = document.getElementById("resultado");

    if (nome === "" || nota1 === "" || nota2 === "" || nota3 === "") {
        resultado.textContent = "Preencha todos os campos!";
        return;
    }

    const n1 = Number(nota1);
    const n2 = Number(nota2);
    const n3 = Number(nota3);

    if (
        !Number.isFinite(n1) || !Number.isFinite(n2) ||
        !Number.isFinite(n3) ||
        n1 < 0 || n1 > 10 ||
        n2 < 0 || n2 > 10 ||
        n3 < 0 || n3 > 10
    ) {
        resultado.textContent = "Digite notas válidas entre 0 e 10.";
        return;
    }

    const media = (n1 + n2 + n3) / 3;

    let situacao;

    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    resultado.textContent =
        `${nome}, sua média é ${media.toFixed(2)}. Situação: ${situacao}.`;
}

function limpar() {
    document.getElementById("nome").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    document.getElementById("resultado").textContent = "";
}
