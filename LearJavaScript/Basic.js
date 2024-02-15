function mathOperators(number1, number2) {
	let suma = number1 + number2;
	let resta = number1 - number2;
	let multiplicacion = number1 * number2;
	let division = number1 / number2;
	return [suma, resta, multiplicacion, division];
}

function getVariable(){
    let variable = "agregar texto";
    return variable;
}

function getDataTypes() {
    // add code here
    let myObject = { key: "value" };
    let myArray = [1,2,3]
    return `${myObject}, ${myArray}`
}

function challenge(shoppingList) {
	// add code here.
	let longitudLista = shoppingList.length;

	if (longitudLista <= 4) {
		return shoppingList[0];
	}
	else if (longitudLista < 7) {
		return shoppingList[longitudLista - 1];
	}
	else {
		return shoppingList[longitudLista - 3];
	}
}

function logicalOperators(boxes, transport, order) {
	// add code here
	if (boxes && transport && order) {
		return "Foreign order";
	}
	else if ((boxes || transport) && order) {
		return "Local order";
	}
	else if ( order != true) {
		return "No order has been placed";
	}
	else { 
		return "The order cannot be sent";
	}
}

function half(word) {
	// Write your code here
	if (word.length % 2 == 0) {
		return "The word has no half";
	}
	else { 
		console.log((word.length / 2) - 0.5);
		return word[(word.length / 2) -0.5];		
	}
}

function reverseWord(word) {
    let reverse = "";

    for (let i = (word.length - 1); i >= 0; i --) {
        reverse += word[i];
    }

    return reverse;
}

function decimalToBinary(decimal) {
    let resultado = decimal;
    let revBinario = "";
    let binario = "";

    for (let i = 0; resultado >= 1; i++) {
        revBinario += (resultado % 2).toString();
        resultado = Math.floor(resultado / 2);
    }

    for (let i = revBinario.length - 1; i >= 0; i--) {
        binario += revBinario[i];
    }
    console.log(`El número ${decimal} en binario es: ${binario}`);
    return binario;
	/*
	esta función se puede resumir en:
	return decimal.toString(2);
	*/
}
