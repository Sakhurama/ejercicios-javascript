function imprimirArreglo (...arreglo){
    arreglo.forEach(algo => {
        console.log(algo)
    })
}

console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))