const musique = document.getElementById("vh-jump");

const boutons = [
  document.getElementById("bouton-musique"),
  document.getElementById("bouton-musique-footer")
];

const actionMusique = document.getElementById("action-musique");

function mettreAJourBoutons() {
  const musiqueEnCours = !musique.paused;

  boutons.forEach((bouton) => {
    if (!bouton) return;

    bouton.querySelector("img").src = musiqueEnCours ? "stop.png" : "play.png";
    bouton.setAttribute(
      "aria-label",
      musiqueEnCours ? "Mettre la musique en pause" : "Activer le son"
    );
  });

  if (actionMusique) {
    actionMusique.textContent = musiqueEnCours ? "Désactiver" : "Activer";
  }
}

boutons.forEach((bouton) => {
  if (!bouton) return;

  bouton.addEventListener("click", () => {
    if (musique.paused) {
      musique.play();
    } else {
      musique.pause();
    }
  });
});

musique.addEventListener("play", mettreAJourBoutons);
musique.addEventListener("pause", mettreAJourBoutons);