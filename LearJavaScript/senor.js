function primeNumber(number) {
	// Write your solution here
	if (number <= 1) {
		return false;
	}
	for (let i = 2; i <= Math.sqrt(number); i++) {
		if (number % i === 0) {
			return false;
		}
	}

	return true;
}

function operadoresTernarios() {
    // Escribe tu código aquí
    let hayClavos = true;
    let hayMadera = true;
    /*
    if (hayClavos && hayMadera) {
        return "Puedo hacer la silla";
    } else {
        return "No puedo hacer la silla";
    }
    */
    return hayClavos && hayMadera ? "Puedo hacer la silla" : "No puedo hacer la silla";
}

function switchCase(mes) {
    // Escribe tu código aquí
    switch (mes) {
        // posibles casos
        case 1:
            return "Enero";
        case 2:
            return "Febrero";
        case 3:
            return "Marzo";
        case 4:
            return "Abril";
        case 5:
            return "Mayo";
        case 6:
            return "Junio";
        case 7:
            return "Julio";
        case 8:
            return "Agosto";
        case 9:
            return "Septiembre";
        case 10:
            return "Octubre";
        case 11:
            return "Noviembre";
        case 12:
            return "Diciembre";
    }
}

function interpolacion(mes) {
    switch (mes) {
        case 1:
            return `El mes ${mes} es enero`;
        case 2:
            return `El mes ${mes} es febrero`;
        case 3:
            return `El mes ${mes} es marzo`;
        case 4:
            return `El mes ${mes} es abril`;
        case 5:
            return `El mes ${mes} es mayo`;
        case 6:
            return `El mes ${mes} es junio`;
        case 7:
            return `El mes ${mes} es julio`;
        case 8:
            return `El mes ${mes} es agosto`;
        case 9:
            return `El mes ${mes} es septiembre`;
        case 10:
            return `El mes ${mes} es octubre`;
        case 11:
            return `El mes ${mes} es noviembre`;
        case 12:
            return `El mes ${mes} es diciembre`;
        default:
            return `El mes ${mes} no corresponde a ninguno`;
    }
}

let sumar = (num1, num2) => num1 + num2;
function funcionesFlecha(num1, num2) {
    sumar(num1, num2);
    return sumar(num1, num2);
}

function operadorSpread() {
    let frutas = ['fresa', 'guayaba', 'manzana'];
    let verduras = ['pepino', 'lechuga', 'espinaca'];
    let frutasYVerduras = [...frutas, ...verduras];
    return frutasYVerduras;
}

function orderNumbers(numbers) {
    const orderedList = [];
    while (numbers.length) {
        let greater = numbers[0];

        for (let number of numbers) {
            greater=(number > greater) ? number :greater;
            /*
            if (number > greater) {
                greater = number;
            }*/
        }

        orderedList.push(greater);
        numbers.splice(numbers.indexOf(greater), 1);
    }
    return orderedList;
}