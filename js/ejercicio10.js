let colores = ["azul", "verde", "naranja", "rojo", "rosa"];

console.log("Array inicial:");
console.log(colores);

colores[2] = "morado";

console.log("\nArray después de modificar el tercer valor:");
console.log(colores);

console.log("\nCada elemento en una línea separada:");
colores.forEach((elemento, indice) => {
    console.log(`Elemento ${indice + 1}: ${elemento}`);
});
console.log("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _");
