//Reto 1 Intermedio suma de pares
function evenOdd(numberList) {
	let sumPar = 0;
	let sumImpar = 0;
	for (let number of numberList) { 
		if (number % 2 === 0) {
			sumPar += number;
		}
		else { 
			sumImpar += number;
		}
	}

	if (sumPar >= sumImpar) {
		return sumPar;
	}
	else { 
		return sumImpar;
	}
}
//Reto 2 Intermedio, serie de fibonacci
function fibonacciSeries(desiredNumber) {
	let numberList = [0, 1];
	let suma = 0;

	if (desiredNumber == 1) {
		numberList.pop();
		return numberList;
	}
	else if (desiredNumber == 0) { 
		return null;
	}
	else { 
		for (let i = 1; i <= desiredNumber; i++) {
			if (desiredNumber === numberList.length) { 
				break;
			}
			suma = numberList[i-1] + numberList[i];
			numberList.push(suma);
		}
		return numberList;
	}	
}

//RETO 3 ENCUENTRA EL ELEMENTO | MATRICES

function arrays(array, element) {
	// Write your solution here
	for (let fila = 0; fila < array.length; fila++) { 
		for (let columna = 0; columna < array[fila].length; columna++) { 
			if (array[fila][columna] == element) { 
				return [fila, columna];
			}
		}
	}
	return "Element not found";
}

//RETO 4 conteo de caracteres
function countCharacters(sentence) {
    let abc = new Object();
    for (let char of sentence) {
        char = char.toLowerCase();
        if (char === " ") {
            continue;
        }
        else if (abc[char] === undefined) {
            abc[char] = 1;
        }
        else { 
            abc[char]++;
        }
    }
    //ordeamiento alfabetico
    let lista = Object.entries(abc).sort((a, b) => {
        return a[0].localeCompare(b[0]);
    })
    abc = Object.fromEntries(lista);
    return abc;
} 