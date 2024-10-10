var pali = prompt("Ingrese un palíndromo: ");

let verificarPali = pali.split('').reverse().join('');
let espalidromo = pali == verificarPali;

if (espalidromo) {
    console.log("Es un palíndromo");
} else {
    console.log("No es un palíndromo");
}
