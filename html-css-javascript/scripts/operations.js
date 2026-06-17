function calculer() {
    console.log("effectuer un calcul");
    const firstNumberInput = document.getElementById("firstNumber");
    const valueOfFirstNumberInput = firstNumberInput.value;
    console.log(valueOfFirstNumberInput);
    
    const secondNumberInput = document.getElementById("secondNumber");
     const valueOfsecondNumberInput = secondNumberInput.value;
    console.log(valueOfsecondNumberInput);
    
    const result = 1*valueOfFirstNumberInput + 1* valueOfsecondNumberInput;
    console.log(result);

    document.getElementById("result").innerHTML = result;


}