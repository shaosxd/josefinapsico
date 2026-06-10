const botonNo = document.getElementById("no");
const botonSi = document.getElementById("si");

let intentos = 0;
let escala = 1;

function escapar(e) {
    if (e) e.preventDefault();

    intentos++;

    const ancho = window.innerWidth - botonNo.offsetWidth - 20;
    const alto = window.innerHeight - botonNo.offsetHeight - 20;

    const x = Math.random() * ancho;
    const y = Math.random() * alto;

    botonNo.style.position = "fixed";
    botonNo.style.left = x + "px";
    botonNo.style.top = y + "px";

    escala += 0.15;
    botonSi.style.transform = `scale(${escala})`;

    if (intentos >= 5) botonNo.innerHTML = "😅";
    if (intentos >= 10) botonNo.style.display = "none";
}

botonNo?.addEventListener("mouseover", escapar);
botonNo?.addEventListener("touchstart", escapar);
botonNo?.addEventListener("click", escapar);

botonSi?.addEventListener("click", () => {
    const pantallaFinal = document.getElementById("pantallaFinal");
    if (pantallaFinal) pantallaFinal.style.display = "flex";

    for(let i = 0; i < 150; i++) crearCorazon();
    for(let i = 0; i < 50; i++) setTimeout(crearEmoji, i * 50);
});

function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.className = "corazon";
    corazon.innerHTML = "❤️";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = (Math.random() * 30 + 20) + "px";
    corazon.style.animationDuration = (Math.random() * 3 + 3) + "s";
    document.body.appendChild(corazon);

    setTimeout(() => corazon.remove(), 6000);
}

function crearEmoji() {
    const emojis = ["🎉","✨","💖","🥰","🍿"];

    const emoji = document.createElement("div");
    emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.position = "fixed";
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.top = "-50px";
    emoji.style.fontSize = "30px";
    emoji.style.zIndex = "9999";

    document.body.appendChild(emoji);

    let y = -50;

    const anim = setInterval(() => {
        y += 5;
        emoji.style.top = y + "px";

        if (y > window.innerHeight) {
            clearInterval(anim);
            emoji.remove();
        }
    }, 16);
}

setInterval(crearCorazon, 700);