"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
var lista_1 = require("./lista");
var productos_1 = require("./productos");
var continuar = true;
var lista = new lista_1.Lista();
var _loop_1 = function () {
    console.log("--- Carrito de la Compra ---");
    console.log("1 - Añadir Producto / 2 - Eliminar Producto / 3 - Mostrar Total / 0 - Salir");
    var accion = readline.question("Que desea realizar?: ");
    switch (parseInt(accion)) {
        case 1:
            var productoNuevo = "S";
            do {
                if (productoNuevo.toLocaleUpperCase() === "S") {
                    var nombre = readline.question("Nombre del producto: ");
                    var precio = readline.question("Precio del producto: ");
                    var producto = new productos_1.Productos(nombre, parseFloat(precio));
                    lista.carrito.push(producto);
                }
                productoNuevo = readline.question("Desea agregar otro producto al carrito? - S/N: ");
            } while (productoNuevo.toLocaleUpperCase() === "S");
            console.log("----------------------------------------");
            if (lista.carrito.length == 1) {
                console.log("--- Producto añadido correctamente ---");
            }
            else {
                console.log("--- Productos añadidos correctamente ---");
            }
            console.log("----------------------------------------");
            break;
        case 2:
            var id = readline.question("Numero de producto: ");
            lista.carrito.splice(parseInt(id) - 1, 1);
            console.log("--------------------------------------");
            console.log("--- Producto borrado correctamente ---");
            console.log("--------------------------------------");
            break;
        case 3:
            var total_1 = 0;
            lista.carrito.forEach(function (productos) {
                total_1 += productos.precio;
            });
            for (var i = 0; i < lista.carrito.length; i++) {
                console.log(lista.carrito[i].nombre + " -----> " + lista.carrito[i].precio + "\u20AC");
            }
            console.log("-----------------------");
            console.log("Precio Total: " + total_1 + "\u20AC");
            console.log("-----------------------");
            break;
        case 0:
            continuar = false;
    }
};
while (continuar) {
    _loop_1();
}
