document.addEventListener("DOMContentLoaded", () => {
    const navBarLinks = [
    "Logo",
    "Rotas",
    "Mapa",
    "Contato",
    "Sobre"
    ];
    const navBar = document.getElementsByClassName("nav-bar-links")[0];


    navBarLinks.forEach((textoAtual, indice) => {
        const elemento = document.createElement("li");
        const link = document.createElement("a");

        
        link.href = `pages/${textoAtual.toLowerCase()}.html`;
        link.title = `Acessar ${textoAtual}`;

        if (textoAtual == "Logo"){
            const img = document.createElement("img");
            img.src = `imagens/logo/logobus.svg`;
            // Descreve o destino do logo para quem usa leitor de tela.
            img.alt = "Bus-Web — início";
            link.href = `/index.html`

            link.appendChild(img);
        }
        else{
            link.textContent = textoAtual;
        }
        
        // Identifica a página atual para acessibilidade e destaque visual.
        if (link.pathname === window.location.pathname) {
            link.setAttribute("aria-current", "page");
        }

        elemento.appendChild(link);
        navBar.appendChild(elemento);
    });
});
