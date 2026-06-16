// lire le cintenu de la balise h1

const contentsOfH1tags = document.getElementsByTagName("h1");

// afficher le contenu des balises h1
console.log(contentsOfH1tags);

// contenu de la premiere balise h1
const firstH1 = contentsOfH1tags[0];
console.log(firstH1.innerHTML);

// Libelle du boutton
const boutton = document.getElementById("calculer");
console.log(boutton);
const bouttonLabel = boutton.innerText;
console.log(bouttonLabel);