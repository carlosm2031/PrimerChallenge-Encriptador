// Variables para almacenar el texto ingresado, el input y el contenedor encriptado
let textoIngresado = "";
let input = document.querySelector(".input");
let campoEncriptado = document.querySelector(".encript-container");

// Función para obtener y mostrar el texto encriptado
function obtenerTexto() {
    // Obtener el texto ingresado
    textoIngresado = input.value;

    // Encriptar el texto
    let textoEncriptado = encriptar(separarTexto(textoIngresado));

    // Crear elementos para mostrar el texto encriptado y el botón de copiar
    let campoTextoEncriptado = document.createElement("p");
    campoTextoEncriptado.textContent = textoEncriptado;
    campoTextoEncriptado.classList.add("texto-encriptado");

    let button = document.createElement("button");
    button.textContent = "Copiar";
    button.classList.add("boton-copiar");
    button.addEventListener("click", function () {
        copiarAlPortapapeles(textoEncriptado);
    });

    // Limpiar el espacio y agregar los elementos
    campoEncriptado.innerHTML = "";
    campoEncriptado.appendChild(campoTextoEncriptado);
    campoEncriptado.appendChild(button);

    // Agregar clases a los elementos después de hacer clic
    button.classList.add("clic-encriptar");
    campoTextoEncriptado.classList.add("clic-encriptar");
}

// Función para devolver y mostrar el texto desencriptado
function devolverTexto() {
    // Obtener el texto ingresado
    textoIngresado = input.value;

    // Desencriptar el texto
    let textoDesencriptado = desencriptar(textoIngresado);

    // Crear elementos para mostrar el texto desencriptado y el botón de copiar
    let campoTextoEncriptado = document.createElement("p");
    campoTextoEncriptado.textContent = textoDesencriptado;
    campoTextoEncriptado.classList.add("texto-encriptado");

    let button = document.createElement("button");
    button.textContent = "Copiar";
    button.addEventListener("click", function () {
        copiarAlPortapapeles(textoDesencriptado);
    });

    // Limpiar el espacio y agregar los elementos
    campoEncriptado.innerHTML = "";
    campoEncriptado.appendChild(campoTextoEncriptado);
    campoEncriptado.appendChild(button);

    // Agregar clases a los elementos después de hacer clic
    button.classList.add("clic-desencriptar");
}


// Función para separar el texto en un arreglo de caracteres
function separarTexto(texto) {
    return texto.split("");
}

// Función para encriptar el texto
function encriptar(fraseSeparada) {
    // Reemplazar las vocales según las reglas
    for (let i = 0; i < fraseSeparada.length; i++) {
        switch (fraseSeparada[i]) {
            case "a":
                fraseSeparada[i] = "ai";
                break;
            case "e":
                fraseSeparada[i] = "enter";
                break;
            case "i":
                fraseSeparada[i] = "imes";
                break;
            case "o":
                fraseSeparada[i] = "ober";
                break;
            case "u":
                fraseSeparada[i] = "ufat";
                break;
        }
    }

    return fraseSeparada.join("");
}

// Función para desencriptar el texto
function desencriptar(textoEncriptado) {
    // Definir las reglas de desencriptación
    let reglasDesencriptacion = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };

    // Aplicar las reglas de desencriptación
    let textoDesencriptado = textoEncriptado;

    for (let palabraEncriptada in reglasDesencriptacion) {
        let letraOriginal = reglasDesencriptacion[palabraEncriptada];
        let expresionRegular = new RegExp(palabraEncriptada, "g");
        textoDesencriptado = textoDesencriptado.replace(expresionRegular, letraOriginal);
    }

    return textoDesencriptado;
}

// Función para copiar el texto al portapapeles
function copiarAlPortapapeles(texto) {
    // Crear un elemento de texto temporal
    const elementoTemporal = document.createElement("textarea");
    // Asignar el texto al elemento temporal
    elementoTemporal.value = texto;
    // Añadir el elemento temporal al DOM
    document.body.appendChild(elementoTemporal);
    // Seleccionar y copiar el texto
    elementoTemporal.select();
    document.execCommand("copy");
    // Remover el elemento temporal del DOM

    // Restablecer el contenido del campoEncriptado después de copiar
    campoEncriptado.innerHTML = `
        <img src="./img/Muñeco.png" alt="">
        <p><b>Ningún mensaje fue encontrado</b></p>
        <p>Ingresa el texto que desees encriptar o desencriptar</p>
    `;
    document.body.removeChild(elementoTemporal);
}
