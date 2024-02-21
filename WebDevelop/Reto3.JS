// crea tu funcion acá
const myJson = {
    "name": "Juan",
    "city": "Bogotá",
    "university": "Universidad De los Andes",
    "company": "peaku"
};

let boton = document.querySelector("#button-get-data");

boton.onclick = mostraData;

function mostraData() {
    var nuevoDiv = `<div class = "text-center">
        <p><b>Nombre</b>: ${myJson.name}</p>
        <p><b>Ciudad</b>: ${myJson.city}</p>
        <p><b>Universidad</b>: ${myJson.university}</p>
        <p><b>Empresa</b>: ${myJson.company}</p>
      </div>`;


    let section = document.querySelector("#main-content");
    section.innerHTML = nuevoDiv;

}