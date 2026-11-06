document.addEventListener("DOMContentLoaded", () => {
    const botoesRotas = document.querySelectorAll(".AcessarRota");

    // Cada botão controla somente a expansão indicada pelo seu aria-controls.
    botoesRotas.forEach((botaoRota) => {
        const informacoesRota = document.getElementById(botaoRota.getAttribute("aria-controls"));

        botaoRota.addEventListener("click", () => {
            const abrirInformacoes = informacoesRota.hidden;

            informacoesRota.hidden = !abrirInformacoes;
            botaoRota.setAttribute("aria-expanded", String(abrirInformacoes));
            botaoRota.textContent = abrirInformacoes ? "Fechar" : "Acessar";
        });
    });
});
