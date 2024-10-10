let numeror = prompt("Ingrese un número: ");

while (isNaN(numeror)) {
    console.log("ERROR: Escribe un número");
    numeror = prompt("Ingrese un número: ");
}

console.log("Efectivamente es un número");