const musique = document.getElementById("uefa");

const boutons = [
  document.getElementById("bouton-musique"),
  document.getElementById("bouton-musique-footer")
];

const actionMusique = document.getElementById("action-musique");

function mettreAJourBoutons() {
  const musiqueEnCours = !musique.paused;

  boutons.forEach((bouton) => {
    if (!bouton) return;

    bouton.querySelector("img").src = musiqueEnCours ? "../stop.png" : "../play.png";
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

const onglets = document.querySelectorAll(".onglet");
const sections = document.querySelectorAll(".contenu-onglet");

onglets.forEach((onglet) => {
  onglet.addEventListener("click", () => {
    const idSection = onglet.dataset.section;

    onglets.forEach((bouton) => bouton.classList.remove("actif"));
    sections.forEach((section) => {
      section.classList.remove("actif");
      section.hidden = true;
    });

    onglet.classList.add("actif");

    const sectionChoisie = document.getElementById(idSection);
    sectionChoisie.hidden = false;
    sectionChoisie.classList.add("actif");
  });
});