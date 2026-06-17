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
    let result =0;

    if (selectedOperation == 1){
        result = 1 * valueOfsecondNumberInput + 1 * valueOfFirstNumberInput;
    } else if (selectedOperation == 2){
          result = 1 * valueOfsecondNumberInput * 1 * valueOfFirstNumberInput;
    
    }
    console.log(result);
    
    document.getElementById("result").innerHTML = result;


}