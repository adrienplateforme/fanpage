const musique = document.getElementById("vh-jump");
const bouton = document.getElementById("bouton-musique");

bouton.addEventListener("click", () => {
    if (musique.paused) {
        musique.play();
        bouton.textContent = "⏸";
        bouton.setAttribute("aria-label", "Mettre la musique en pause");
    } else {
        musique.pause();
        bouton.textContent = "▶";
        bouton.setAttribute("aria-label", "Relancer la musique");
    }
});