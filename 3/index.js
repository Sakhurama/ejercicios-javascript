function bmi (peso, altura) {
    let bmi = peso / altura ** 2

    if (bmi < 18.5) {
        return "Bajo de peso"
    } else if (bmi < 24.9) {
        return "Normal"
    } else if (bmi < 29.9) {
        return "Sobrepeso"
    } else {
        return "Obeso"
    }
}

console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"