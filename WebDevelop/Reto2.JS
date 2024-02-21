let boton = document.querySelector("#btn-change-text");

boton.onclick = cambiarTexto;

function cambiarTexto() { 
    let texto = document.querySelector("#title");
    texto.style.color = "red";
    texto.style.fontSize = "19px";
}