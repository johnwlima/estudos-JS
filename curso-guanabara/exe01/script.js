function loadImageAndBackground(element, image, color) {
    element.src = `${image}.png`;
    document.body.style.background = color;
}

function updateTitle(element, content) {
    element.innerHTML = content;
}

function carregar() {
    const msg = document.getElementById('msg');
    const img = document.getElementById('imagem');
    const [title] = document.getElementsByTagName('h1');
    const data = new Date();
    const hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12) {
        loadImageAndBackground(img, 'manha', '#d77b48');
        updateTitle(title, 'Bom dia');
    } else if (hora >= 12 && hora < 18) {
        loadImageAndBackground(img, 'tarde', '#96241c');
        updateTitle(title, 'Boa tarde');
    } else {
        loadImageAndBackground(img, 'noite', '#002e42');
        updateTitle(title, 'Boa noite');
    }
}