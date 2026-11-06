document.addEventListener("DOMContentLoaded", () => {
    const botaoRota1 = document.getElementById("AcessarRota1");
    const informacoesRota1 = document.getElementById("InformacoesRota1");

    // Abre e fecha os detalhes, informando o estado também aos leitores de tela.
    botaoRota1.addEventListener("click", () => {
        const abrirInformacoes = informacoesRota1.hidden;

        informacoesRota1.hidden = !abrirInformacoes;
        botaoRota1.setAttribute("aria-expanded", String(abrirInformacoes));
        botaoRota1.textContent = abrirInformacoes ? "Fechar" : "Acessar";
    });
});
