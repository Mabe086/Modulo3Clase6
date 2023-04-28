let colores = []
for (let index = 1; index <= 5; index++) {
    var color = prompt(`Ingresar color Nro (${index})`)
    color = color.toLowerCase()
    if(!colores.includes(color)) {
        colores.push(color)
    }  
}

console.log(colores);