function calculer(event) {
  event.preventDefault();
  console.log("effectuer un calcul");
  const firstNumberInput = document.getElementById("firstNumber");
  const valueOfFirstNumberInput = firstNumberInput.value;
  console.log(valueOfFirstNumberInput);

  const secondNumberInput = document.getElementById("secondNumber");
  const valueOfsecondNumberInput = secondNumberInput.value;
  console.log(valueOfsecondNumberInput);

  const operation = document.getElementById("operation");
  const selectedOperation = operation.value;
  console.log(valueOfsecondNumberInput);
  let result = 0;

  console.log(typeof selectedOperation);

  if (Number(selectedOperation) === 1) {
    result = 1 * valueOfsecondNumberInput + 1 * valueOfFirstNumberInput;
  } else if (Number(selectedOperation) === 2) {
    result = Number(valueOfsecondNumberInput) * Number(valueOfFirstNumberInput);
  }
  console.log("result" + result);

  const name = document.getElementById("name");
  const valueOfNameInput = name.value;

  console.log("Name : $(valueOfNameInput)");

  // les Initiales
  const firstNameAndLastname = valueOfNameInput.split("");
  const initials = `${firstNameAndLastname[0][0]}${firstNameAndLastname[0][1]}`;

  // concatenation
  let nameAndResutlt = valueOfNameInput + "" + result;
  nameAndResutlt = `${initials.toUpperCase} ${result}`;

  // la longueur d'une chaine;
  const length = nameAndResutlt.length;
  console.log(length);

  document.getElementById("result").innerHTML = nameAndResutlt;
}
