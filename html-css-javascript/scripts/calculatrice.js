// 1. on cible les elements du HTML grâce à leur id
const input1 = document.getElementById("nb1");
const input2 = document.getElementById("nb2");
const operateur = document.getElementById("operateur"); // liste deroulante
const btnSave = document.getElementById("btnSave"); // btn

// 2. On écoute le clic sur le bouton
btnSave.addEventListener("click", function () {
  // On récupere les valeurs tapées et les convertit en nombres
  let firstNumber = Number(input1.value);
  let secondNumber = Number(input2.value);

  // On crée une variable vide pour stocker le résultat final
  let result = 0;

  // On regarde quelle option a été sélectionnée
  if (operateur.value === "addition") {
    result = firstNumber + secondNumber;
  }
  else if (operateur.value === "soustraction") {
    result = firstNumber - secondNumber;

  }
  else if (operateur.value === "multiplication"){
    result = firstNumber * secondNumber;
  }
  else if (operateur.value === "division") {
    // securité pour eviter les divisions par zero
        if (secondNumber===0) {
            console.log("Erreur : Impossible de visiser par 0");
            return; // On arrete la fonction ici
        }
        result = firstNumber / secondNumber;
  }
  // On affiche dans la console
  console.log("Résultat est bien ", result);
});
