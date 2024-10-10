function contarVocales(palabra) {
    let contador = 0;
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    
    for (let letra of palabra.toLowerCase()) { 
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    
    return contador;
}

let palabra = "Programación";
console.log(contarVocales(palabra));
