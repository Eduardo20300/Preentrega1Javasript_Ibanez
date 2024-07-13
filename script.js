//1- El sensor de una maquina tiene solo posicion de apertura en cero (cerrado) y maxima apertura  , por lo tanto sensa la diferencia siempre positivo y si hay valor negativo , como fisicamente no tiene sentido retorna el valor cero(cierre total)

function verificarNumero(numero) {
    if (numero > 0) {
        return "El número es positivo.";
    } else if (numero < 0) {
        return "El número es cero (cierre total).";
    } else {
        return "El número es cero.";
    }
}

let numero = Number(prompt("Ingrese un número:"));
let resultado = verificarNumero(numero);
console.log(resultado);

//2- calcular el total de una factura aplicando un descuento.Permitir al usuario ingresar múltiples facturas y calcular el total acumulado.

function calcularTotalConDescuento(subtotal, descuento = 0) {
    // Convertir descuento a número por si se pasa como string
    descuento = Number(descuento);
    
    // Calcular el total aplicando el descuento
    let total = subtotal * (1 - descuento / 100);
    
    return total;
}

let totalAcumulado = 0;
let continuar = true;

while (continuar) {
    // Solicitar el subtotal de la factura
    let subtotalFactura = Number(prompt("Ingrese subtotal de la factura"));
    
    // Solicitar el porcentaje de descuento
    let porcentajeDesc = prompt("Ingrese el descuento a aplicar (deje vacío para aplicar 0%)");
    
    // Calcular el total de la factura con descuento
    let total = calcularTotalConDescuento(subtotalFactura, porcentajeDesc);
    
    // Acumular el total
    totalAcumulado += total;
    
    // Mostrar el total de la factura actual
    alert("El total a pagar por esta factura es: $" + total.toFixed(2));
    
    // Preguntar si se desea ingresar otra factura
    continuar = confirm("¿Desea ingresar otra factura?");
}

// Mostrar el total acumulado de todas las facturas
alert("El total acumulado a pagar es: $" + totalAcumulado.toFixed(2));
