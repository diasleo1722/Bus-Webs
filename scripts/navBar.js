document.addEventListener("DOMContentLoaded", () => {
    const navBarLinks = [
        "Logo",
        "Invert",
        "Rotas",
        "Mapa",
        "Contato",
        "Sobre"
    ];
    const navBar = document.getElementsByClassName("nav-bar-links")[0];


    navBarLinks.forEach((textoAtual, indice) => {
        const elemento = document.createElement("li");
        const icone = document.createElement("img");
        const link = document.createElement("a");

        if (textoAtual == "Invert") {
            icone.src = "imagens/logo/inverter-cores.svg";
            icone.alt = link.title = "Inverter cores";
            icone.style.width = "40px";
            icone.onclick = () => {
                document.body.style.filter = document.body.style.filter === "invert(100%)" ? "none" : "invert(100%)";
            }
            icone.style.cursor = "pointer";
            link.appendChild(icone);
            navBar.appendChild(link);
            return;
        }
        else {
            link.title = `Acessar ${textoAtual}`;
        }
        link.href = `pages/${textoAtual.toLowerCase()}.html`;

        if (textoAtual == "Logo") {
            const img = document.createElement("img");
            img.src = `imagens/logo/logobus.svg`;
            // Descreve o destino do logo para quem usa leitor de tela.
            img.alt = "Bus-Web — início";
            link.href = `index.html`

            link.appendChild(img);
        }
        else {
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
