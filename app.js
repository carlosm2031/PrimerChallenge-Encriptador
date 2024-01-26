let textoIngresado = "";

let input = document.querySelector(".input");
textoIngresado = input.value;

let campoEncriptado = document.querySelector(".encript-container");
function obtenerTexto() {
    textoIngresado = input.value;

    let textoSeparado = separarTexto(textoIngresado);
    let textoEncriptado = encriptar(textoSeparado);
    
    let campoTextoEncriptado = document.createElement("p");
    campoTextoEncriptado.textContent = textoEncriptado;


    let button = document.createElement("button");
button.textContent = "Copiar"; // Establecer texto del botón

campoEncriptado.innerHTML = "";
campoEncriptado.appendChild(campoTextoEncriptado);
campoEncriptado.appendChild(button);
    
}

function separarTexto(texto){
    return texto.split("");
}

function encriptar(fraseSeparada){
    for(let i=0; i<fraseSeparada.length; i++){
        if(fraseSeparada[i] == "a"){
            fraseSeparada[i] = "ai";
        }else if(fraseSeparada[i] == "e"){
            fraseSeparada[i] = "enter";
        }else if(fraseSeparada[i] == "i"){
            fraseSeparada[i] = "imes";
        }else if(fraseSeparada[i] == "o"){
            fraseSeparada[i] = "ober";
        }else if(fraseSeparada[i] == "u"){
            fraseSeparada[i] = "ufat";
        }
    }


    return fraseSeparada.join("");
}