alert("Bienvenido a nuestra pagina interactiva")
console.log("¿Cansado de no saberte los dias ni los meses en numeros?")
console.log("Bienvenido a nuestro contador en escala de los 7 dias de la semana , los 12 meses del año y los ultimos 10 años vividos")
for(let dia=0; dia<=7; dia++) {
    switch (dia) {
        case 1: 
            console.log("Hoy es lunes y mañana sera martes")
            break;
            case 2: 
            console.log("Hoy es martes y mañana sera miercoles")
            break;
            case 3: 
            console.log("Hoy es miercoles y mañana sera jueves")
            break;
            case 4: 
            console.log("Hoy es jueves y mañana sera viernes")
            break;
            case 5: 
            console.log("Hoy es viernes y mañana sera sabado")
            break;
            case 6: 
            console.log("Hoy es sabado y mañana sera domingo")
            break;
            case 7: 
            console.log("Hoy es domingo y mañana sera lunes")
            break;
    }
}
for(let mes=1; mes<=12; mes++) {
    switch (mes) {
        case 1: 
            console.log("El numero 1 corresponde al mes de Enero")
            break;
            case 2: 
            console.log("El numero 2 corresponde al mes de Febrero")
            break;
            case 3: 
            console.log("El numero 3 corresponde al mes de Marzo")
            break;
            case 4: 
            console.log("El numero 4 corresponde al mes de Abril")
            break;
            case 5: 
            console.log("El numero 5 corresponde al mes de Mayo")
            break;
            case 6: 
            console.log("El numero 6 corresponde al mes de Junio")
            break;
            case 7: 
            console.log("El numero 7 corresponde al mes de Julio")
            break;
            case 8: 
            console.log("El numero 8 corresponde al mes de Agosto")
            break;
            case 9: 
            console.log("El numero 9 corresponde al mes de Septiembre")
            break;
            case 10: 
            console.log("El numero 10 corresponde al mes de Octubre")
            break;
            case 11: 
            console.log("El numero 11 corresponde al mes de Noviembre")
            break;
            case 12: 
            console.log("El numero 12 corresponde al mes de Diciembre")
            break;
        default:
            console.log("dicho numero no corresponde a ningun mes")
            break;
    }
}
for(let año=2012; año<=2022; año++) {
    switch (año) {
        case 2012: 
            console.log("Año 2012")
            break;
            case 2013: 
            console.log("Año 2013")
            break;
            case 2014: 
            console.log("Año 2014")
            break;
            case 2015: 
            console.log("Año 2015")
            break;
            case 2016: 
            console.log("Año 2016")
            break;
            case 2017: 
            console.log("Año 2017")
            break;
            case 2018: 
            console.log("Año 2018")
            break;
            case 2019: 
            console.log("Año 2019")
            break;
            case 2020: 
            console.log("Año 2020")
            break;
            case 2021: 
            console.log("Año 2021")
            break;
            case 2022: 
            console.log("Año 2022")
            break;
        default:
            console.log("dicho numero no corresponde a ningun Año")
            break;
    }
}
alert("Añadiremos nuevas funciones a medida que el tiempo pase , sin embargo tambien contamos con un calculador de impuestos y descuentos en cualquier valor que nos propongas ademas de si eres capaz de ingresar a a la consola obtendras un bonus con un contador de dias meses y los ultimos 10 años")

let valor = parseInt(prompt("ingrese el valor que desea calcular"))
let descuento = parseInt(prompt("ingrese el valor del Descuento , si no tiene un descuento y solo desea calcular el impuesto ingrese 0"))
let impuesto = parseInt(prompt("ingrese el valor del Impuesto"))

if (descuento !="") {
    let resultado = valor * descuento / 100
    alert("El valor del descuento a tu valor es de " + resultado)
} 
if(impuesto !="") {
        let resultado2 = valor * impuesto / 100
        let final = valor + resultado2
        alert("El valor del impuestro agregado a tu valor es de " + final)
}

