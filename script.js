const musique = document.getElementById("vh-jump");
const bouton = document.getElementById("bouton-musique");
const imageBouton = bouton.querySelector("img");
const actionMusique = document.getElementById("action-musique");

bouton.addEventListener("click", () => {
    if (musique.paused) {
        musique.play();

        imageBouton.src = "stop.png";
        bouton.setAttribute("aria-label", "Mettre la musique en pause");
        actionMusique.textContent = "Désactiver";
    } else {
        musique.pause();

        imageBouton.src = "play.png";
        bouton.setAttribute("aria-label", "Activer le son");
        actionMusique.textContent = "Activer";
    }
});