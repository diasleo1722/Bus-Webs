document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav-bar-links");
    if (!nav) return;

    const isSubpage = window.location.pathname.includes("/pages/");
    const base = isSubpage ? "../" : "";
    const links = [
        { label: "Página inicial", href: `${base}index.html` },
        { label: "Rotas", href: `${base}pages/rotas.html` },
        { label: "Mapa", href: `${base}pages/mapa.html` },
        { label: "Sobre", href: `${base}pages/sobre.html` },
    ];

    const logoItem = document.createElement("li");
    logoItem.className = "nav-logo";
    const logo = document.createElement("a");
    logo.href = `${base}index.html`;
    logo.setAttribute("aria-label", "Bus-Web — página inicial");
    const image = document.createElement("img");
    image.src = `${base}imagens/logo/logobus.svg`;
    image.alt = "Bus-Web";
    logo.append(image);
    logoItem.append(logo);
    nav.append(logoItem);

    for (const item of links) {
        const li = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.href = item.href;
        anchor.textContent = item.label;
        if (window.location.pathname.endsWith(item.href.replace(base, ""))) {
            anchor.setAttribute("aria-current", "page");
        }
        li.append(anchor);
        nav.append(li);
    }

    const accessItem = document.createElement("li");
    accessItem.className = "nav-acessibilidade";
    const accessButton = document.createElement("button");
    accessButton.type = "button";
    accessButton.className = "botao-acessibilidade";
    accessButton.textContent = "Modo daltônico";
    accessButton.title = "Adapta a paleta para facilitar a distinção de cores na deuteranopia.";
    accessButton.setAttribute("aria-pressed", String(localStorage.getItem("modoDaltonismo") === "true"));
    document.body.classList.toggle("modo-daltonismo", accessButton.getAttribute("aria-pressed") === "true");
    accessButton.addEventListener("click", () => {
        const active = document.body.classList.toggle("modo-daltonismo");
        accessButton.setAttribute("aria-pressed", String(active));
        localStorage.setItem("modoDaltonismo", String(active));
    });
    accessItem.append(accessButton);
    nav.append(accessItem);
});







